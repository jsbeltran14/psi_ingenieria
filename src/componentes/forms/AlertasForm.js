import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./form.css"
import { Link } from "react-router-dom";

const url ="http://localhost:3001/alertas"

export default function SolicitudForm() {
  const [programado, setProgramado]=useState({
    servicio:"",
    fecha:"",
    cliente:"",
    email:""
  })

  const handleChange=e=>{
    const {name, value} = e.target;
    setProgramado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }
  
  const [data, setData] = useState([]);
  
      const peticionesGet = async() =>{
          await axios.get(url)
          .then(response=>{
              setData(response.data);
          })
      }
  
      useEffect(()=>{
          peticionesGet();
      },[])
  
  const peticionPost=async()=>{
    await axios.post(url, programado)
    .then(response=>{
      setData(data.concat(response.data));
    })
  }
  
    return (
        <div className="form__container">
            <h2>Crear alerta</h2>
      <form>
        <label>Servicio:</label>
        <input 
          type="text" 
          required 
          name="servicio"
          onChange={handleChange}
        />
        <label>Fecha Servicio:</label>
        <input 
          type="date" 
          required 
          name="fecha"
          onChange={handleChange}
        />
        <label>Cliente:</label>
        <input 
          type="text" 
          required 
          name="cliente"
          onChange={handleChange}
        />
         <label>Email:</label>
        <input
        type="text" 
        required 
          name="email"
          onChange={handleChange}
        ></input>
        <Link to="/"><button onClick={()=>peticionPost()}>Programar Servicio</button></Link>
      </form>
        </div>
    )
}
