import { useParams, Link } from "react-router-dom"
import mockTrending from "../../mock-data/mock-trending"

export default function TrendingDetail() {
    const params = useParams()
    const first = params.person.split("-")[0]
    const last = params.person.split("-")[1]

    const matchingPerson = mockTrending.find(person => {
        return (
            person.firstname == first && person.lastname == last
        )
    })

    return (
        <>
        <Link to="/trending" >Back to trending</Link>
        <h1>{`${matchingPerson.firstname} ${matchingPerson.lastname}`}</h1>
        <div>
            <img src={`/images/${matchingPerson.imageURL}`} alt={`${matchingPerson.firstname} ${matchingPerson.lastname}`}/>
            <p><strong>Email:</strong> <a href={`mailto:${matchingPerson.email}`}>{matchingPerson.email}</a></p>
            <p><strong>Phone:</strong> {matchingPerson.phone}</p>
        </div>
        </>
        
    )
}
