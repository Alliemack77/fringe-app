import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ClientContext } from "../../context/client-context"

export default function Dashboard() {
    const { clientList, getAllClients } = useContext(ClientContext)
    
    useEffect(() => {
        getAllClients()
    },[])

    const filteredlist = clientList.filter((item) => {

        if(item.history) {
            const todaysDate = new Date() // today
            const prevDate = new Date() 
            prevDate.setDate(todaysDate.getDate() - 30) //sets prev date to 30 days before today
            const serviceDate = new Date(item.history[0].date) // sets latest date of service

            return (
                serviceDate >= prevDate && serviceDate <= todaysDate
            )
        } 
    })


    return (
        <div className="dashboard centered-column">
            <section className="stats" aria-labelledby="stats-label">
                <span id="stats-label" className="sr-only">Monthly stats</span>
                <div>
                    <h1>Welcome, Allison!</h1>
                    <p>Income in the last 30 days</p>
                    <p className="income">$5,360</p>
                    <Link to="/profile/income" id="details" aria-labelledby="stats-label details">Details</Link>
                </div>
                <div className="review">
                    <p>Review Score</p>
                    <img src="/src/assets/images/star.svg" />
                    <p><strong>5.0</strong>/5</p>
                </div>
            </section>
            <section >
                <div>
                    <h2>Recent Clients</h2>
                    <Link to="/profile/clients">View all clients</Link>
                </div>
                <ul>

                    {filteredlist.map((client) => {
                        return (
                            <li key={client.firstname}>
                                <img  src={client.imageUrl} alt="" />
                                <div>
                                    <p>{client.firstname} {client.lastname}</p>
                                    <p> 
                                        {client.history[0].service.map((item) => {
                                            return (
                                                <span className="service">{item}</span>
                                            )
                                        })}
                                        - {client.history[0].total}
                                    </p>
                                </div>
                                <Link>Edit</Link>
                            </li>
                        )
                    })}

                </ul>
            </section>
        </div>
    )
}