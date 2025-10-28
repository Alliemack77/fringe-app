import { Outlet, NavLink } from "react-router-dom"
import { useContext } from "react"
import { A11yContext } from "../context/a11y-context"

export default function ProfileLayout () {
    const {expanded} = useContext(A11yContext)

    return (
        <main inert={expanded}>
            <nav className="profile-navigation centered-column" aria-labelledby="profile-nav-label">
                <span className="sr-only" id="profile-nav-label">User Dashboard</span>
                <div className="nav-content" role="group" aria-label="Navigation">
                    <ul role="list">
                        <li><NavLink to="." end>Dashboard</NavLink></li>
                        <li><NavLink to="clients">Clients</NavLink></li>
                        <li><NavLink to="gallery">Gallery</NavLink></li>
                        <li><NavLink to="income">Income</NavLink></li>
                        <li><NavLink to="create-client">Add New Client</NavLink></li>
                        {/* <li><NavLink to="reviews">Reviews</NavLink></li> */}
                    </ul>
                </div>
            </nav>
            <Outlet />
        </main>

    )
}