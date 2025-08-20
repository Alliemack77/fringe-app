import { createContext, useState } from "react";
import axios from "axios";

const ClientContext = createContext()

const ClientProvider = ({children}) => {

    const [clientData, setClientData] = useState({})
    const [clientList, setClientList] = useState([])
    const [clientDetail, setClientDetail] = useState([])

    const API_BASE = import.meta.env.VITE_API_URL || ""

    const addClient = async () => {
        if (Object.keys(clientData).length === 0) {
            return 
        } else {
            try {
                const response = await axios.post(`${API_BASE}/add`, clientData)
            } catch (error) {
                console.error(error)
            }
        } 
    }

    const getAllClients = async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/clients`)
            const data = response.data
            setClientList(data)
        } catch (error) {
            console.error(error)
        }
    }

    const getClientById = async (firstname, lastname) => {
        const clientName = {
            first: firstname, 
            last: lastname
        }

        try {
            const response = await axios.post(`${API_BASE}/client`, clientName)
            const data = response.data
            setClientDetail(data)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ClientContext.Provider 
            value={{
                clientDetail, 
                setClientDetail,
                clientData, 
                setClientData, 
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