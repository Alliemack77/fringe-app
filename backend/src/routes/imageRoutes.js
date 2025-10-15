import express from 'express'
import {uploadToCloudinary} from '../controllers/imageControllers.js'

const router = express.Router()

router.post("/", uploadToCloudinary)

export default router