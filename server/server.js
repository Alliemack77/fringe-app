import express from "express"
import path from 'path'
import { fileURLToPath } from 'url';
import "dotenv/config"
import cors from "cors";
import uploadImage from "./uploadImage.js"
import { MongoClient } from "mongodb";
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ["POST", "GET"],  
    allowedHeaders: "Content-Type"
}

//  Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// CORS for dev only
if(process.env.NODE_ENV !== "production") {
    app.use(cors(corsOptions))
}

// Mongo setup 
const uri = process.env.MONGO_URL
const client = new MongoClient(uri)
let entries;

// Mongo query functions
async function getAllClients() {
    try {
        const items = await entries.find({}).toArray() 
        return items
    } catch (error) {
        console.error("An error occured in the getAllClients function", error)
        throw error
    }
}

async function getClientById(clientDetails) {
    try {
        const findResult = await entries.findOne({
            firstname: clientDetails.first, 
            lastname: clientDetails.last
        })
        return findResult
    } catch (error) {
        console.error("An error occured in the getClientById function", error)
    }
}

//  Connect to Mongo and Initialize server
async function initServer() {

    try {
        await client.connect()
        const database = client.db("Fringe")
        entries = database.collection("clients")
        console.log("MongoDB connected")

        app.listen(process.env.PORT || 5000, () => console.log(`Your cool server is listening on port ${process.env.PORT || 5000}`))
        
        app.get("/api/clients",  async (req, res) => {
            try {
                const result = await getAllClients()
                res.send(result)
            } catch (error) {
                console.error("Error in /api/clients:", error)
                res.status(500).send({ error: "Failed to get all clients"})
            }
            
        })

        app.post("/client",  async (req, res) => {
            try {
                const result = await getClientById(req.body)
                res.send(result)
            } catch {
                res.status(500).send({ error: "Failed to get client by that ID"})
            }
        })

        app.post("/upload", async (req, res) => {

            await uploadImage(req.body.image)
                .then((url) => {
                    res.send(url)
                })
                .catch((err) => console.log("There was an error", err))
        })

        app.post("/add", async (req, res) => {

            try {
                const result = await entries.insertOne(req.body);
                res.send(result)
            } catch (error) {
                console.error("An error occured in the addClient function", error)
            }
        })

        if(process.env.NODE_ENV === "production") {
            app.use(express.static(path.join(__dirname, "client", "dist")))

            app.get(/.*/, (req, res) => {
                res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
            })
        }

    } catch (error) {
        console.error("Failed to start server", error)
    }
}

initServer()