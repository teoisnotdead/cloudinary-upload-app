import { cloudinaryConfig } from '../config.js'

export const uploadImage = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    }

    const files = req.files.images // Asegúrate de que el campo de entrada en el formulario se llama 'images'
    const uploadPromises = []

    // Si es solo un archivo, convertirlo en un array para tratarlo de manera uniforme
    const filesArray = Array.isArray(files) ? files : [files]

    for (const file of filesArray) {
      const originalName = file.name.split('.')[0]
      const publicId = `dbscg-fw/cards/${originalName}`

      // Crear una promesa de subida para cada archivo
      const uploadPromise = cloudinaryConfig.uploader.upload(file.tempFilePath, {
        public_id: publicId
      })

      uploadPromises.push(uploadPromise)
    }

    // Esperar a que todas las subidas terminen
    const results = await Promise.all(uploadPromises)

    res.json({ success: true, results })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
