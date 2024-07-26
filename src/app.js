import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url'
import { uploadRoutes } from './routes/upload.routes.js'
import { config } from './config.js'

const app = express()

// Configurar __dirname para usar con ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(express.static(path.join(__dirname, '../public')))
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  limits: { fileSize: 50 * 1024 * 1024 },
}))

// Rutas
app.use('/api', uploadRoutes)

const port = config.PORT || 3000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
