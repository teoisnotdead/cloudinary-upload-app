import dotenv from 'dotenv'
import cloudinary from 'cloudinary'

dotenv.config()

export const config = {
  PORT: process.env.PORT || 3000,
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const cloudinaryConfig = cloudinary.v2
