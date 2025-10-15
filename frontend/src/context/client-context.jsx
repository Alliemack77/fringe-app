import { createContext, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'

const ClientContext = createContext()

const ClientProvider = ({children}) => {

    // const [clientData, setClientData] = useState({})
    const [clientList, setClientList] = useState([])
    const [clientDetail, setClientDetail] = useState([])
    const [loading, setLoading] = useState(true)


    const API_BASE = "http://localhost:5000"

    const getAllClients = async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/clients`)
            const data = response.data
            setClientList(data)
        } catch (error) {
            console.log("Error getting notes", error)
            toast.error("Failed to load notes")
        }
    }

    const getClientById = async (id) => {
        const clientId = id

        try {
            const response = await axios.get(`${API_BASE}/api/clients/${clientId}`)
            const data = response.data
            setClientDetail(data)
        } catch (error) {
            console.error(error)
        }
    }
    

    const addClient = async (clientData) => {
        if (Object.keys(clientData).length === 0) {
            return 
        } else {
            try {
                await axios.post(`${API_BASE}/api/clients`, clientData)
                toast.success("Client added successfully!")
                
            } catch (error) {
                console.log("Error creating new client", error)
                toast.error("Failed to create new client")
            } 
        } 
    }


    return (
        <ClientContext.Provider 
            value={{
                clientDetail, 
                setClientDetail,
                // clientData, 
                // setClientData, 
                clientList, 
                setClientList,
                addClient,
                getAllClients, 
                getClientById }}>
            {children}
        </ClientContext.Provider>
    )

}

export {ClientContext, ClientProvider}