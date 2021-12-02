import React, { useState } from 'react'
import "./form.css"

export default function ProgramadoForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    return (
        <div className="form__container">
            <h2>Programar Servicio</h2>
      <form>
        <label>Servicio:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Fecha:</label>
        <input
          type="date"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <label>Cliente:</label>
        <input
        type="text" 
        required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button>Programar Servicio</button>
      </form>
        </div>
    )
}
