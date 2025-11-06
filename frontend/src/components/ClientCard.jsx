import { Link } from 'react-router-dom'

const ClientCard = (props) => {
  
  return (
    
    <li className='client-card'>
        <div className="image">
          <img src={props.client.imageUrl} alt=""/>
        </div>

        <div className="text">
          <h2>
            <Link to={`${props.url}${props.client._id}`} key={props.client._id}>{props.client.firstname} {props.client.lastname}</Link>
          </h2>
          { props.client.tags &&
            <>
              <span id='category-label' hidden={true}>categories</span>
              <ul role="list" className="tags" aria-labelledby="category-label">
                {props.client.tags.map((tag) => {
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
    </li>
    
  )
}

export default ClientCard