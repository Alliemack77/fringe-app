import ClientCard from "../../components/ClientCard"
import mockTrending from "../../mock-data/mock-trending"
import users from "../../mock-data/mock-users"


export default function Trending() {

    const flexibleGridStyles = {
        "--width": "300px", 
        "--gap": "4rem",
    }

    const centeredColumnStyles = {
        "--padding-block": "7.5rem"
    }

    const trendingList = 
        users.map((user) => {
            return (
                user.clients.map((client) => {
                    return (
                        <ClientCard url="/trending/" client={client} key={client._id}/>
                    )
                })
            )
        })

    return (
        <div className="trending">
            <section className="centered-column" aria-labelledby="trending-label" style={centeredColumnStyles}>
                <h1 id="trending-label">Trending Near You</h1>
                <ul role="list" className="flexible-grid" style={flexibleGridStyles}>
                    {trendingList}
                </ul>
            </section>  
        </div>
    )
}


 