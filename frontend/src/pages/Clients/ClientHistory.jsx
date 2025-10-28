import { useOutletContext } from "react-router-dom"

export default function ClientHistory() {

  const {clientDetail} = useOutletContext()

  const clientHistory = 
    clientDetail?.history && clientDetail.history.length > 0 ? (
      clientDetail.history.map((item) => {
        const options = {
          year: "numeric", 
          month: "long", 
          day: "numeric"
        }
        const convertedDate = new Date(item.date).toLocaleDateString("en-US", options)
        
        return (
          <div className="detail-item" key={item.date}>
            <h2>{convertedDate}</h2>
            <p><strong>Total: </strong>{item.total}</p>
            <p><strong>Service: </strong></p>
            <ul>
              {
                item.service.map((entry) => {
                  return (
                    <li key={entry}>{entry}</li>
                  )
                })
              }
            </ul>
            
          </div>
        )
      })
    ) : null
  
  return (
    <section className="history">
      {clientHistory}
    </section>
  )
}


