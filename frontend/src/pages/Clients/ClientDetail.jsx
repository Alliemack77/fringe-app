import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ClientContext } from "../../context/client-context"


export default function ClientDetail() {

    const params = useParams()
    const id = params.client
    // const firstname = params.client.split("-")[0]
    // const lastname = params.client.split("-")[1]
    const {clientDetail, getClientById} = useContext(ClientContext)


    useEffect(() => {
        getClientById(id)
    }, [params])

    return (
        <>
            <h1>{`${clientDetail.firstname} ${clientDetail.lastname}`}</h1>
            <img src={clientDetail.imageUrl} alt={`${clientDetail.firstname} ${clientDetail.lastname}`}/>
            <p><strong>Email1:</strong> <a href={`mailto:${clientDetail.email}`}>{clientDetail.email}</a></p>
            <p><strong>Phone:</strong> {clientDetail.phone}</p>
        </>
    ) 
}