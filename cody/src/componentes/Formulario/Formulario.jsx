import './Formulario.css';

import { useState } from 'react';

import Footer from '../Footer/Footer';
import { MensajeDeInicio } from '../Inicio/mensajeDeInicio';
import NavbarInicio from '../navbar_inicio/NavbarInicio';

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
        <section className='preBody'>
    <section className='body'>
        <section className='inicio'>
             <NavbarInicio />
             <MensajeDeInicio />
            
            <form className='formulario' onSubmit={handleSubmit}>
            <header>Login</header>
              <input className='texto_form px-4'
              placeholder='Nombre de usuario'
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
              />
              <input className='texto_form px-4' 
               placeholder='Password / Contraseña'
               type="password" 
               value={password}
               onChange={e => setPassword(e.target.value)}
               required
              />
              <div className='bottom'>
                <div className='left'>
                    <input type="checkbox" id="check" /> <label htmlFor="check">Recordarme</label>
                </div>
                <div className='right'>
                    <label><a href="olvido"> Olvido su contraseña?</a></label>
                </div>
             </div>  
             <button id="ingresar-btn"
             className="text-decoration-none px-4 py-1 rounded-4">Iniciar</button>
             <a href="">has click para iniciar tu sesion</a> 
             <button id="registrarse-btn"
             className="text-decoration-none px-2 py-1 rounded-4">Registarme</button>
             <a href="">has click para crear una cuenta con nosotros</a>
             <button id="ingresar-btn"
             className="text-decoration-none px-3 py-1 rounded-4">Invitado</button>
             <a href="">dar un paseo como invitado</a>
            </form>
        {error && <h4>Todos los campos son obligatorios</h4> }  
        </section>
    </section>
    <Footer /> 
    </section>
      
    )
}