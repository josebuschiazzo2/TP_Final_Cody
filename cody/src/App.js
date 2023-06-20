import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./home/Navbar"
import Carousel from "./home/Carousel";
import CardsContent from './home/CardsContent';
import Footer from './home/Footer';
import Content from './home/Content';

function App() {
  return (
    <div>
    <Navbar/> 
    <Carousel/>
    <Content/> 
   <CardsContent/>
   <Footer/>
       </div>
  );
}

export default App;
