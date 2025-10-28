import { useContext, useEffect } from "react"
import { useParams, Link, NavLink,  Outlet } from "react-router-dom"
import { ClientContext } from "../../context/client-context"


export default function ClientDetail() {

    const params = useParams()
    const id = params.id
    const {clientDetail, getClientById} = useContext(ClientContext)

    const centeredColumnStyles = {
        "--padding-block": "2rem"
    }

    useEffect(() => {
        getClientById(id)
    }, [])

    return (
        <section className="centered-column"  style={centeredColumnStyles} aria-labelledby="client-dashboard-label" >
            <span hidden={true} id="client-dashboard-label">Client Details</span>
            <Link to="/profile/clients">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none" aria-hidden={true} > 
                    <path d="M20.2264 8.0905H5.66354C5.21047 8.0905 4.85449 7.73452 4.85449 7.28146C4.85449 6.82839 5.21047 6.47241 5.66354 6.47241H20.2264C20.6794 6.47241 21.0354 6.82839 21.0354 7.28146C21.0354 7.73452 20.6794 8.0905 20.2264 8.0905Z" fill="#333333" fillOpacity="0.85"/>
                    <path d="M9.7087 13.7538C9.60259 13.7551 9.49739 13.7342 9.39985 13.6924C9.30232 13.6506 9.21461 13.5888 9.14237 13.5111L3.47904 7.84779C3.15542 7.52417 3.15542 7.02256 3.47904 6.69894L9.14237 1.0518C9.46599 0.728177 9.96759 0.728177 10.2912 1.0518C10.6148 1.37541 10.6148 1.87702 10.2912 2.20064L5.19422 7.29764L10.2912 12.3946C10.6148 12.7183 10.6148 13.2199 10.2912 13.5435C10.1294 13.7053 9.91905 13.7862 9.72488 13.7862L9.7087 13.7538Z" fill="#333333" fillOpacity="0.85"/>
                </svg>
                Back to all clients
            </Link>

            <div className="client-details">
                <div className="client-text">
                    <div>
                        <h1>{`${clientDetail.firstname} ${clientDetail.lastname}`}</h1>
                        <p><strong>Phone:</strong> {clientDetail.phone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${clientDetail.email}`}>{clientDetail.email}</a></p>
                    </div>
                    <img src={clientDetail.imageUrl} alt={`${clientDetail.firstname} ${clientDetail.lastname}`}/>
                </div>

                <nav className="profile-navigation" aria-labelledby="client-nav-label">
                    <span className="sr-only" id="client-nav-label">{`${clientDetail.firstname} ${clientDetail.lastname}`} Service Details</span>
                    <div className="nav-content" role="group" aria-label="Navigation">
                        <ul role="list">
                            <li><NavLink to="." end>History</NavLink></li>
                            <li><NavLink to="formulas">Formulas</NavLink></li>
                            <li><NavLink to="photos">Photos</NavLink></li>
                        </ul>
                    </div>
                </nav>

                <Outlet context={{clientDetail}}/>
            </div>
        </section>  
        
    ) 
}