import { useParams, Link } from "react-router-dom"
import mockTrending from "../../mock-data/mock-trending"

export default function TrendingDetail() {
    const params = useParams()
    const id = params.id

    const matchingPerson = mockTrending.find(person => {
        return (
            person._id === id
        )
    })

    const pageStyles = {
        "--padding-block": "8rem",
    }

    return (
        <section className="centered-column trending-detail" style={pageStyles} >
            <Link to="/trending">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none" aria-hidden={true} > 
                    <path d="M20.2264 8.0905H5.66354C5.21047 8.0905 4.85449 7.73452 4.85449 7.28146C4.85449 6.82839 5.21047 6.47241 5.66354 6.47241H20.2264C20.6794 6.47241 21.0354 6.82839 21.0354 7.28146C21.0354 7.73452 20.6794 8.0905 20.2264 8.0905Z" fill="#333333" fillOpacity="0.85"/>
                    <path d="M9.7087 13.7538C9.60259 13.7551 9.49739 13.7342 9.39985 13.6924C9.30232 13.6506 9.21461 13.5888 9.14237 13.5111L3.47904 7.84779C3.15542 7.52417 3.15542 7.02256 3.47904 6.69894L9.14237 1.0518C9.46599 0.728177 9.96759 0.728177 10.2912 1.0518C10.6148 1.37541 10.6148 1.87702 10.2912 2.20064L5.19422 7.29764L10.2912 12.3946C10.6148 12.7183 10.6148 13.2199 10.2912 13.5435C10.1294 13.7053 9.91905 13.7862 9.72488 13.7862L9.7087 13.7538Z" fill="#333333" fillOpacity="0.85"/>
                </svg>
                Back to trending
            </Link>
         
            <img src={`${matchingPerson.imageUrl}`} alt=""/>

            <div className="tags-wrapper">
                { matchingPerson.tags &&
                    <>
                        <span className="sr-only" id="list-label">categories</span>
                        <ul role="list" className="tags" aria-labelledby="list-label">
                            {matchingPerson.tags.map((tag) => {
                                return (
                                    <li key={tag}>
                                        <span className={`tag ${tag}`}>{tag}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                }
            </div>

            <div className="text"> 
                <div className="intro">
                    <img src="/images/avatar.png" height="100" width="100" alt=""/>
                    <div>
                        <h1>Cleo Anderson</h1>
                        <p>stylist</p>
                    </div>
                </div>

                <p>With 20+ years behind the chair, I specialize in lived-in colour, precision cuts, and styles that work with your life—not against it. Whether you're ready for a bold change or a subtle refresh, I’ve got you. Let’s create something that feels like you!</p>

                <Link className="button" to="mailto:cleo.anderson@mail.com">Book with Cleo</Link>
            </div>
            
        </section>
    )
}
