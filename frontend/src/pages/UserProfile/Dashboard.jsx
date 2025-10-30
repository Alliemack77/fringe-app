import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../context/client-context"

export default function Dashboard() {
    const { clientList, getAllClients } = useContext(ClientContext)

    const filteredList = clientList.filter((item) => {
        if(item.history) {
            const todaysDate = new Date() // today
            const prevDate = new Date() 
            prevDate.setDate(todaysDate.getDate() - 30) //sets prev date to 30 days before today
            const lastItem = item.history[item.history.length - 1]// gets last item in the service array
            const serviceDate = new Date(lastItem.date) // sets latest date of service
            
            return (
                serviceDate >= prevDate && serviceDate <= todaysDate
            )
            
        } 
    })

    // const filteredList = [
    //     {
    //         email: "olivia.ramirez12@email.com",
    //         firstname: "Olivia",
    //         history: [
    //             {
    //                 date: "2025-10-01T07:00:00.000Z",
    //                 service: ['full highlight', 'haircut', 'blowout'],
    //                 total:"$375"
    //             }
    //         ],
    //         imageUrl: "https://res.cloudinary.com/dtzlnnnf6/image/upload/v1745888386/i8xa2swl5ju1pxwixaqy.jpg",
    //         lastname:"Ramirez",
    //         phone: "916-555-3745",
    //         tags: ['style', 'color', 'haircut'],
    //         _id: "681024842d6cd05105f9a056"
    //     }, 
        
    // ]

    useEffect(() => {
        getAllClients()
    }, [])


    return (
        <div className="dashboard">
            <section className="centered-column stats" aria-labelledby="stats-label">
                <span id="stats-label" hidden={true}>Monthly stats</span>
                <div className="sub-two-column">
                    <h1>Welcome, Allison!</h1>
                    <p>Income in the last 30 days</p>
                    <p className="income">$5,360</p>
                    <Link to="/profile/income" id="details" aria-labelledby="stats-label details">Details</Link>
                </div>
                <div className="sub-two-column review">
                    <p>Review Score
                         <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" aria-hidden="true">
                            <path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" fill="#FF8C38"/>
                        </svg>  
                        <span>5.0</span>/5
                    </p>
                </div>
            </section>
            <section className="centered-column recent-clients" aria-labelledby="recent-clients-label">
                <div className="sub-two-column">
                    <h2 id="recent-clients-label">Recent Clients</h2>
                    <Link to="/profile/clients">View all clients</Link>
                </div>
                <ul className="flexible-grid" role="list">
                    { filteredList.length > 0 ?
                    
                    
                        filteredList.map((client) => {
                            return (
                                <li key={client.firstname} className="recent-card">
                                    <img src={client.imageUrl} alt="" />
                                    <div>
                                        <p><strong>{client.firstname} {client.lastname}</strong></p>
                                        <p> 
                                            {client.history[client.history.length - 1].service.map((item) => {
                                                return (
                                                    <span className="service" key={item}>{item} | </span>
                                                )
                                            })}
                                            {client.history[client.history.length - 1].total}
                                        </p>
                                    </div>
                                    <Link aria-label={`Edit ${client.firstname} ${client.lastname}`} to={`/profile/clients/${client._id}`}>Edit</Link>
                                </li>
                            )
                        }) :

                        <p>There's nothing to see here. <Link to="/profile/create-client">Add a new client</Link> or update an existing.</p>
                    
                    
                    }

                </ul>
            </section>
        </div>
    )
}