import { createContext, useState } from "react";
import axios from "axios";

const ClientContext = createContext()

const ClientProvider = ({children}) => {

    const [clientData, setClientData] = useState({})
    const [clientList, setClientList] = useState([])
    const [clientDetail, setClientDetail] = useState([])

    const addClient = async () => {
        if (Object.keys(clientData).length === 0) {
            return 
        } else {
            try {
                const response = await axios.post('https://fringelookbook.netlify.app/api/add', clientData)
            } catch (error) {
                console.error(error)
            }
        } 
    }

    const getAllClients = async () => {
        try {
            const response = await axios.get('https://fringelookbook.netlify.app/api/')
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
            const response = await axios.post('https://fringelookbook.netlify.app/api/client', clientName)
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