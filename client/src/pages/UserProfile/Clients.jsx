import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../context/client-context.jsx"
import Form from '../../components/Form/index.js'
import axios from 'axios'

export default function Clients() {
    
    const { 
        clientList, 
        setClientList, 
        clientData, 
        setClientData, 
        addClient, 
        getAllClients,
    } = useContext(ClientContext)

    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState("")

    // must convert to Base64
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const getFormData = async (formData) => {
        const file = formData.get('image') 
        const base64 = await convertBase64(file)
        setLoading(true)

        axios.post('http://localhost:5000/upload', {image: base64})
            .then((res) => {
                const values = {
                    firstname: formData.get('firstname'),
                    lastname: formData.get('lastname'),
                    email: formData.get('email'),
                    imageUrl: res.data 
                }

                setUrl(res.data)
                setClientData(values)
                setClientList(prevList => {
                    return [
                        ...prevList, 
                        values 
                    ]
                    })
                alert("Image uploaded successfully")
            })
            .then(() => setLoading(false))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        addClient()
    }, [clientData])

    useEffect(() => {
        getAllClients()
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('clientList', JSON.stringify(clientList))
    // }, [clientList])

    return (
        <>
        <h1>Your clients</h1>

            { loading ? <p>Loading...</p> :
                <section className="gallery-grid">
                    {clientList.map((client) => {
                    return (
                        <Link to={`/profile/clients/${client.firstname}-${client.lastname}`}>
                            <div key={client._id}>
                                <p>{client.firstname} {client.lastname}</p>
                                <img alt={`${client.firstname} ${client.lastname}`} src={client.imageUrl} />
                            </div>
                        </Link>
                    )
                    })}
                </section>
            }       

            

        <h2>Add a client</h2>
            <Form getFormData={getFormData}>
                <Form.FormInput label="First Name" id="firstname" type="text"></Form.FormInput> 
                <Form.FormInput label="Last Name" id="lastname" type="text"></Form.FormInput> 
                <Form.FormInput label="Email" id="email" type="email"></Form.FormInput>
                <Form.FormInput label="Phone" id="phone" type="phone"></Form.FormInput>
                {/* <Form.FormInput label="Date" id="service-date" type="date"></Form.FormInput> */}
                {/* <Form.FormInput label="Service" id="service" type="text"></Form.FormInput> */}
                <Form.ImageUpload></Form.ImageUpload>
            </Form >
        </>
    )
}





