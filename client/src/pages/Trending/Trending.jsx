import { Link } from "react-router-dom"
import mockTrending from "../../mock-data/mock-trending"


export default function Trending() {
    return (
        <>
            <h1>Trending near you</h1>

            {mockTrending.map((client) => {
                return (
                    <Link to={`/trending/${client.firstname}-${client.lastname}`}>
                        <div key={client.id}>
                            <p>{client.firstname} {client.lastname}</p>
                            <img alt={`${client.firstname} ${client.lastname}`} src={`/images/${client.imageURL}`} />
                        </div>
                    </Link>
                )
            })}
            {/* <div>
                <img src="./src/assets/images/ombre-2.jpg" alt="" />
                <img src="./src/assets/images/butterfly-braid-updo.webp" alt="" />
                <img src="./src/assets/images/curly-fade.jpg" alt="" />
                <img src="./src/assets/images/makeup-1.jpg" alt="" />
                <img src="./src/assets/images/mens-1.jpg" alt="" />
                <img src="./src/assets/images/short-curls.jpg" alt="" />
                <img src="./src/assets/images/makeup-3.jpg" alt="" />
                <img src="./src/assets/images/mens-2.jpg" alt="" />
                <img src="./src/assets/images/short-curls-4.jpg" alt="" />
                <img src="./src/assets/images/updo-3.jpg" alt="" />
            </div> */}
        </>
    )
}