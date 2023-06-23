import './Formulario.css';

import { useState } from 'react';

import Carousel from '../home/Carousel';
import Navbar from '../home/Navbar';

export function Formulario({ setUser }){
    const [nombre, setNombre]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) =>{
       e.preventDefault()
       if(nombre === "" || password === "") { 
        setError(true)
        return
       }
       setError(false)

       setUser([nombre])
    }

    return(
        <section className='inicio'>
             <Navbar />
             <Carousel />
            <h4>Registrate para tener una experiencia unica</h4>
           
            <form className='formulario' onSubmit={handleSubmit}>
              <input className='texto_form px-4'
              placeholder='Nombre de usuario'
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              />
              <input className='texto_form px-4' 
               placeholder='Password / Contraseña'
               type="password" 
               value={password}
               onChange={e => setPassword(e.target.value)}
              />
             <button id="registrarse-btn"
             className="text-decoration-none px-2 py-1 rounded-4">Registarme</button>
             <button id="ingresar-btn"
             className="text-decoration-none px-3 py-1 rounded-4">Invitado</button>
            </form>
        {error && <h4>Todos los campos son obligatorios</h4> }
        </section>
    )
}