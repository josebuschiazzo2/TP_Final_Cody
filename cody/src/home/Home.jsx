import './HomeUser.css';

import CardsContent from '../componentes/Cards/CardsContent';
import Carousel from '../componentes/Carousel/Carousel';
import Footer from '../componentes/Footer/Footer';
import Navbar from '../componentes/navbar_inicio/Navbar';

{/* *LLEVAR ESTA FUNCION A LA NAVBAR* */}
function Home({user, setUser}) {

    const handleLogout = () =>{
      setUser([])
    }

  return (
    <div>
    <Navbar/> 
    <Carousel/>
       {/*LLEVAR ESTA FUNCION A LA NAVBAR*
    <div className='user'>
     
    <h2> Hola {user} </h2>
    
    <button id="registrarse-btn"
      className="text-decoration-none px-2 py-1 rounded-4"
      onClick={handleLogout}
      >Cerrar mi secion</button>
    </div>
    LLEVAR ESTA FUNCION A LA NAVBAR*/}
    <CardsContent/>
    <Footer/>
       </div>
  );
}

export default Home;
