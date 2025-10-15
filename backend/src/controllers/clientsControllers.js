import Client from "../models/Client.js"

export async function getAllClients(req, res) {
    try {
        const clients = await Client.find()
        res.status(200).json(clients)

    } catch (error) {
        console.error("Error in the getAllClients controller")
        res.status(500).send({ message: "Internal server error" })
    }
}

export async function getClientById(req, res) {
    try {
        const client = await Client.findById(req.params.id)

        if(!client) return res.status(404).json({message: "Client not found!"})
        
        res.status(200).json(client)
        
    } catch (error) {
        console.error("Error in the getClientById controller")
        res.status(500).send({ message: "Internal server error" })
    }
}

export async function addClient(req, res) {
    try {
        const { email, firstname, lastname, phone, imageUrl, history } = req.body
        const client = new Client({ email, firstname, lastname, phone, imageUrl, history})

        const savedClient = await client.save()
        res.status(200).json(savedClient)
    } catch (error) {
        console.error("Error in the addClient controller")
        res.status(500).send({ message: "Internal server error" })
    }
}

export async function updateClient(req, res) {
    try {
        const { email, firstname, lastname, phone, imageUrl, history } = req.body
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, {email, firstname, lastname, phone, imageUrl, history}, {new: true})

        if(!updatedClient) return res.status(404).json({message: "Client not found!"})

        res.status(200).json("Client updated successfully!")

    } catch (error) {
        console.error("Error in the updateClient controller")
        res.status(500).send({ message: "Internal server error" })
    }
}

export async function deleteClient(req, res) {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id)

        if(!deletedClient) return res.status(404).json({message: "Client not found!"})

        res.status(200).json({message: "Your client has been deleted!"})

    } catch (error) {
        console.error("Error in the deleteClient controller")
        res.status(500).send({ message: "Internal server error" })
    }
}