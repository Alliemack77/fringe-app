import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../context/client-context.jsx"
import Form from '../../components/Form/index.js'
import axios from 'axios'


const CreateClient = () => {
    const { addClient, setClientList } = useContext(ClientContext)
    const API_BASE = "http://localhost:5000"
    const navigate = useNavigate()

    const centeredColumnStyles = {
        "--padding-block": "2rem"
    } 

    // must convert image to Base64
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

        axios.post(`${API_BASE}/upload`, {image: base64})
            .then((res) => {
                const values = {
                    firstname: formData.get('firstname'),
                    lastname: formData.get('lastname'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    imageUrl: res.data 
                }

                addClient(values)
                setClientList(prevList => {
                    return [
                        ...prevList, 
                        values 
                    ]
                })
                
                
            })
            .then(() => {
                navigate("/profile/clients")
            })
            .catch((err) => console.log(err))
    }

    // useEffect(() => {
    //     addClient()
    //     return () => setLoading(false)
    // }, [clientData])

    return (
        <div className="clients">
            <section className="centered-column" style={centeredColumnStyles}>
                <h1>Add a client</h1>
                <Form handleSubmit={getFormData}>
                    <Form.FormInput label="First Name" id="firstname" type="text"></Form.FormInput> 
                    <Form.FormInput label="Last Name" id="lastname" type="text"></Form.FormInput> 
                    <Form.FormInput label="Email" id="email" type="email"></Form.FormInput>
                    <Form.FormInput label="Phone" id="phone" type="phone"></Form.FormInput>
                    {/* <Form.FormInput label="Date" id="service-date" type="date"></Form.FormInput> */}
                    {/* <Form.FormInput label="Service" id="service" type="text"></Form.FormInput> */}
                    <Form.ImageUpload></Form.ImageUpload>
                </Form >
            </section>    
        </div>
    )
  
}

export default CreateClient