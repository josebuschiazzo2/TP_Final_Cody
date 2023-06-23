import './HomeUser.css';

import CardsContent from './CardsContent';
import Carousel from './Carousel';
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';

{/* se crea  */}
function Home({user, setUser}) {

    const handleLogout = () =>{
      setUser([])
    }

  return (
    <div>
    <Navbar/> 
    <Carousel/>
    <div className='user'>
    <h2> {user} </h2>
    {/*VER PORQUE RE ROMPE AL DESLOGEAR*/}
    <button id="registrarse-btn"
      className="text-decoration-none px-2 py-1 rounded-4"
      onClick={handleLogout}
      >Cerrar mi secion</button>
      {/*VER PORQUE RE ROMPE AL DESLOGEAR*/}
    </div>
    <Content  />
    <CardsContent/>
    <Footer/>
       </div>
  );
}

export default Home;
