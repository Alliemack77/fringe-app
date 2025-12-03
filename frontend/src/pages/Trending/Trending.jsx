import { useSearchParams, Link } from "react-router-dom"
import ClientCard from "../../components/ClientCard"
import users from "../../mock-data/mock-users"


export default function Trending() {
    const [searchParams, setSearchParams ] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const trendingClients = users.flatMap(user => user.clients)
    
    const filteredList = trendingClients.filter(item => {
        if(typeFilter === null) {
            return item
        } else {
            return (
                item.tags.includes(typeFilter)
            )
        }
    })

    const trendingList = filteredList.map(client => {
        return (
            <ClientCard url="/trending/" client={client} key={client._id}/>
        )
    })

    const flexibleGridStyles = {
        "--width": "300px", 
        "--gap": "4rem",
    }

    const centeredColumnStyles = {
        "--padding-block": "7.5rem"
    }

    return (
        <div className="trending">
            <section className="centered-column" aria-labelledby="trending-label" style={centeredColumnStyles}>
                <h1 id="trending-label">Trending Near You</h1>
                <ul role="list" className="tags" aria-labelledby="filter-group-label">
                    <span className="sr-only" id="filter-group-label">Trending filter options</span>
                    <li className="tag ">
                        <Link to="?type=haircut">haircut</Link>
                    </li>
                    <li className="tag ">
                        <Link to="?type=color">color</Link>
                    </li>
                    <li className="tag ">
                        <Link to="?type=style">style</Link>
                    </li>
                    <li className="tag ">
                        <Link to="?type=makeup">makeup</Link>
                    </li>
                    <li className="tag clear">
                        <Link to="">clear filter</Link>
                    </li>
                </ul>
                <ul role="list" className="flexible-grid " style={flexibleGridStyles}>
                    {trendingList}
                </ul>
            </section>  
        </div>
    )
}


 