import express from 'express'
import { uploadImage } from '../controllers/upload.controller.js'

const router = express.Router()

router.post('/upload', uploadImage)

export { router as uploadRoutes }
