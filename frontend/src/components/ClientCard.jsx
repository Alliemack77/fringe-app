import { Link } from 'react-router-dom'

const ClientCard = ({client}) => {
  return (
    
    <li className='client-card'>
        <div className="image">
          <img src={client.imageUrl} />
        </div>

        <div className="text">
          <h2>
            <Link to={`/profile/clients/${client._id}`} key={client.id}>{client.firstname} {client.lastname}</Link>
          </h2>
        </div>

        { client.tags &&
          <ul className="tags">
            {client.tags.map((tag) => {
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