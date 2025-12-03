import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import clientRoutes from "./routes/clientRoutes.js"
import imageRoutes from "./routes/imageRoutes.js"
import { connectDB } from "./config/db.js"
import cors from 'cors'
const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ["POST", "GET", "PUT", "DELETE"],  
    allowedHeaders: "Content-Type"
}

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

// middleware
app.use(express.json({limit: "1mb", extended: true}))
// app.use(express.urlencoded({limit: "1mb", extended: true}))

if(process.env.NODE_ENV !== "production") {
    app.use(cors(corsOptions))
}

// routes
app.use("/api/clients", clientRoutes)
app.use("/upload", imageRoutes)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html" ))
    })

}

// connect to DB then start server
connectDB().then(()=> {
    app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT)
    })
})


