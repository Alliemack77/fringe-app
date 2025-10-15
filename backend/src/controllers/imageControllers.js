import { uploadImage } from "../config/imageUploads.js";

export async function uploadToCloudinary(req, res) {

    try {
        const url = await uploadImage(req.body.image)
        res.status(200).send(url)
    } catch (error) {
        console.error("Error in the uploadToCloudinary controller")
        res.status(500).send({ message: "Internal server error" })
    }
}