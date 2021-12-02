import React, { useState } from 'react'
import "./form.css"

export default function SolicitudForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    return (
        <div className="form__container">
            <h2>Crear alerta</h2>
      <form>
        <label>Servicio:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Fecha Servicio:</label>
        <input 
          type="date" 
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
        <label>Cliente:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Crear Alerta</button>
      </form>
        </div>
    )
}
