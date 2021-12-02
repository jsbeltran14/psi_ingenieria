import React, { useState } from 'react'
import "./form.css"

export default function SolicitudForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    return (
        <div className="form__container">
            <h2>Crear Solicitud</h2>
      <form>
      <label>Servicio:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Cliente:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Fecha Alerta:</label>
        <input 
          type="date" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Estado:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="pendiente">pendiente</option>
          <option value="programado">programado</option>
          <option value="cancelado">cancelado</option>
        </select>
        <button>Crear Solicitud</button>
      </form>
        </div>
    )
}
