import ClientCard from "../../components/ClientCard"
import mockTrending from "../../mock-data/mock-trending"


export default function Trending() {

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
                <ul role="list" className="flexible-grid" style={flexibleGridStyles}>
                    {mockTrending.map((client, index) => {
                        return (
                            <ClientCard url="/trending/" client={client} key={index}/>
                        )
                    })}
                </ul>
            </section>  
        </div>
    )
}


 