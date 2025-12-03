import { Link, useLocation} from 'react-router-dom'
import users from '../mock-data/mock-users' 

const ClientCard = (props) => {
  const location = useLocation()
  const path = location.pathname
  const stylistId = props.client.stylistId
  const stylist = users.find((user) => {
    return (
      stylistId === user._id
    )
  })

  return (
    
    <li className='client-card'>
      <div className="image">
        <img src={props.client.imageUrl} alt=""/>
      </div>

      <div className="text">

        {path === "/profile/clients" ? 
          <h2>
            <Link to={`${props.url}${props.client._id}`} key={props.client._id}>{props.client.firstname} {props.client.lastname}</Link>
          </h2> :
          <h2> 
            <span>Styled by </span>
            <Link to={`${props.url}${props.client._id}`} key={stylist._id}>{stylist.firstname} {stylist.lastname}</Link>
          </h2>
        }

        {/* <h2>
          <Link to={`${props.url}${props.client._id}`} key={props.client._id}>{props.client.firstname} {props.client.lastname}</Link>
        </h2> */}

        { props.client.tags &&
          <>
            <span id='category-label' hidden={true}>categories</span>
            <ul role="list" className="tags" aria-labelledby="category-label">
              {props.client.tags.map((tag) => {
                return (
                  <li key={tag} className={`tag ${tag}`}>
                    {/* <span className={`tag ${tag}`}>{tag}</span> */}
                    {tag}
                  </li>
                )
              })}
            </ul>
          </>
        }
      </div>
    </li>
    
  )
}

export default ClientCard