import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./form.css"
import { Link } from "react-router-dom";

const url ="http://localhost:3001/solictudes"
export default function SolicitudForm() {

  const [programado, setProgramado]=useState({
    servicio:"",
    maquina:"",
    fecha:"",
    cliente:"",
    tel:"",
    email:"",
    estado:""
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
            <h2>Crear Solicitud</h2>
      <form>
      <label>Servicio:</label>
        <input 
          type="text" 
          required 
          name="servicio"
          onChange={handleChange}
        />
        <label>Maquina:</label>
        <input 
          type="text" 
          required 
          name="maquina"
          onChange={handleChange}
        />
        <label>Fecha:</label>
        <input
          type="date"
          required
          name="fecha"
          onChange={handleChange}
        ></input>
        <label>Cliente:</label>
        <input
        type="text" 
        required 
          name="cliente"
          onChange={handleChange}
        ></input>
        <label>Telefono:</label>
        <input
        type="text" 
        required 
          name="tel"
          onChange={handleChange}
        ></input>
        <label>Email:</label>
        <input
        type="text" 
        required 
          name="email"
          onChange={handleChange}
        ></input>
        <label>Estado:</label>
        <select
          name="estado"
          onChange={handleChange}
        >
          <option value="pendiente">pendiente</option>
          <option value="programado">programado</option>
          <option value="cancelado">cancelado</option>
        </select>
        <Link to="/"><button onClick={()=>peticionPost()}>Crear Solicitud</button></Link>
      </form>
        </div>
    )
}
