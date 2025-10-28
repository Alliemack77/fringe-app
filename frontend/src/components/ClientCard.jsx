import { Link } from 'react-router-dom'

const ClientCard = (props) => {
  
  return (
    
    <li className='client-card'>
        <div className="image">
          <img src={props.client.imageUrl} />
        </div>

        <div className="text">
          <h2>
            <Link to={`${props.url}${props.client._id}`} key={props.client._id}>{props.client.firstname} {props.client.lastname}</Link>
          </h2>
        </div>

        { props.client.tags &&
          <ul role="list" className="tags">
            {props.client.tags.map((tag) => {
              return (
                <li key={tag}>
                  <p className={`tag ${tag}`}>{tag}</p>
                </li>
              )
            })}
          </ul>
        }
       
        
    </li>
    
  )
}

export default ClientCard