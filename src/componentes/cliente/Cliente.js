import React from 'react'
import "./cliente.css"

export default function Cliente(props) {
    const {nombre, tel, email} = props
    return (
        <div className="cliente__container">
            <strong>{nombre}</strong>
            <p>Numero: {tel}</p>
            <p>Email: {email}</p>
        </div>
    )
}
