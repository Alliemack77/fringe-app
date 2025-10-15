import express from "express"
import { getAllClients, addClient, updateClient, deleteClient, getClientById } from "../controllers/clientsControllers.js"

const router = express.Router()

router.get("/", getAllClients)
router.get("/:id", getClientById)
router.post("/", addClient)
router.put("/:id", updateClient)
router.delete("/:id", deleteClient)

export default router