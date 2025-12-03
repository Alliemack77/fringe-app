import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../../context/client-context.jsx"
import ClientCard from "../../components/ClientCard.jsx"

export default function Clients() {
    
    // const [url, setUrl] = useState("")
    // const [loading, setLoading] = useState(true)
    const { loading, clientList, getAllClients } = useContext(ClientContext)

    const flexibleGridStyles = {
        "--width": "300px", 
        "--gap": "4rem",
    }

    const centeredColumnStyles = {
        "--padding-block": "2rem"
    }

   
    useEffect(() => {
        getAllClients()
        // return () => setLoading(false)
    }, [])

    return (
        <div className="clients">
            <section className="centered-column" aria-labelledby="clients-label" style={centeredColumnStyles}>
                <h1 id="clients-label">Your clients</h1>
                { loading && <p>Loading clients...</p>}
                { clientList.length > 0 && (
                    <ul role="list" className="flexible-grid" style={flexibleGridStyles}>
                        {clientList.map((client, index) => {
                            return (
                                <ClientCard url='/profile/clients/' client={client} key={index} />
                            )
                        })}
                    </ul>
                )}   
            </section>    
        </div>

    )
}





