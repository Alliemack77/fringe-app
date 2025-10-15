import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema(
    {
        email: {
            type: String, 
            required: true
        }, 
        imageUrl: {
            type: String, 
            required: false
        }, 
        firstname: {
            type: String, 
            required: true
        }, 
        lastname: {
            type: String, 
            required: true
        }, 
        phone: {
            type: String, 
            required: true
        }, 
        // history: [{
        //     date: Date, 
        //     service: [String], 
        //     total: String
        // }]
    }
)

const Client = mongoose.model('Client', clientSchema)

export default Client