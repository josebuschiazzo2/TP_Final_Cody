import './HomeUser.css';

import CardsContent from '../componentes/Cards/CardsContent';
import Carousel from '../componentes/Carousel/Carousel';
import Footer from '../componentes/Footer/Footer';
import Navbar from '../componentes/navbar_inicio/Navbar';

function Home() {

  return (
    <div>
    <Navbar/> 
    <Carousel/>
       
    <CardsContent/>
    <Footer/>
       </div>
  );
}

export default Home;
