import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {dbName: "Fringe"})
        console.log("MongoDB connected successfully!")

    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(1) //exit with error
    }
}