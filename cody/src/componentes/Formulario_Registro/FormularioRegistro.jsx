import './FormularioRegistro.css';

import { useState } from 'react';

import NavbarInicio from '../navbar_inicio/NavbarInicio';

const FormularioRegistro = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [email, setEmail] = useState('');

    const [personas, setPersonas] = useState ([]);
     
    const handelSubmit = (e)=> {
        e.preventDefault();
        console.log(nombre);
        console.log(apellido);
        console.log(nacionalidad);
        console.log(email);

        // creacion de un arreglo de personas 'nuevaPersona' que contenga todos los datos "nombre, apellido etc..."
    const nuevaPersona = { nombre: nombre, apellido: apellido, nacionalidad: nacionalidad, email: email };

        // aqui agregamos el arreglo de nuevaPersonas en el setPersonas y lo relacionamos para que se vayan cargando al arreglo 'personas'
        setPersonas([nuevaPersona,...personas]);
        setNombre(''); // aqui setNombre vuelve a vacio una ves se haya hecho click en el boton Enviar
        setApellido(''); // aqui setApellido vuelve a vacio una ves se haya hecho click en el boton Enviar
        setNacionalidad('');
        setEmail('');
        console.log(personas);  // muesta en arreglo de personas   
    }

    return (
        
        <> <section className ="inicio">
             <NavbarInicio />
    
            <section className ="form">
            <h3>Formulario de Registro</h3>  
            <form onSubmit={handelSubmit}>
                <h4>Para crear tu cuenta</h4>
                <h4>te pediremos algunos datos</h4>
                            
                <input className='control' type="text" placeholder='Nombre' value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
                
                <input className='control' type="text" placeholder='Apellido' value={apellido} onChange={(e)=>(setApellido(e.target.value))}></input>
            
                <input className='control' type="text" placeholder='Nacionalidad' value={nacionalidad} onChange={(e)=>(setNacionalidad(e.target.value))}></input>
                            
                <input className='control' type="text" placeholder='correo electrónico' value={email} onChange={(e)=>(setEmail(e.target.value))}></input>
                
                <button type= "submit" >Quiero Registrarme</button>
            </form>
            </section>
            </section>
            
            {/*
            <section class ="form2">
            {personas.map((persona) => <Card key={persona.nombre} nombre={persona.nombre} apellido={persona.apellido} nacionalidad={persona.nacionalidad} dni={persona.dni} edad={persona.edad} descripcion={persona.descripcion}></Card>)}               
            </section>
            */}         
                 
        </>
    )
}
export default FormularioRegistro;

