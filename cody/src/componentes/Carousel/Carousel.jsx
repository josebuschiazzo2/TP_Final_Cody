import './carousel.css';

import Carousel1 from '../img/Carousel1.jpg';
import Carousel2 from '../img/Carousel2.jpg';
import Carousel3 from '../img/Carousel3.jpg';

function Carousel() {
  return (
    <div id="bg-image">
      <div id="carouselExampleInterval" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Carousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Carousel2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Carousel3} className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* overlay shadow on carousel */}
        <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="  text-md-right">
                  <h1 className="titleOverlay">Nuestros transportes</h1>
                  <p className="textOverlay d-none d-md-block">
                    Contactanos para realizar un encomienda a las distintas bases permanentes o temporales
                  </p>
                 <button id="contact" type="button" className="btn btngreen" data-toggle="modal" data-target="#modalCatalogo">Contacto</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Carousel
