import "./navbar.css"
import LogoCodyPNG from "./../img/LogoCodyPNG.png"
function Navbar() {
  return (
      <header> 
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          {/* logo  */}
          <img className="logoCody" src={LogoCodyPNG} alt="logo" />
          {/* Toggle btn */}
          <button className="navbar-toggler shadow-none border-0 " style={{backgroundColor: '#537993' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* sidebar */}
          <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            {/* Sidebar Header */}
            <div class="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CODY</h5>
              <button type="button" className="btn-close-white btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            {/* sidebar body */}
            <div className=" offcanvas-body">

              {/*En <ul> se puede modificar la posicion del menu con la clase justify-content-center o justify-content-end  */}
              <ul className="navbar-nav   fs-5 p-2 flex-grow-1 pe-5">

                <li className=" nav-item mx-1">
                  <a id="inicioLink" class="nav-link active " href="#">Inicio</a>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <a id="noticiasLink" class="nav-link active" href="#">Clima antártico</a>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <a id="contactoLink" class="nav-link active" href="#">Gráficos</a>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <a id="contactoLink" class="nav-link active" href="#">Noticias</a>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <a id="contactoLink" class="nav-link active" href="#">Contacto</a>
                  <hr id="lineNavbar"  />
                </li>
              </ul>
              {/* Login / Sign up */}
              <div className="d-flex justify-content-center align-items-center gap-2">
                <a id="ingresar-btn" className="text-decoration-none px-2 py-1 rounded-4 " href="">Ingresar</a>
                <a id="registrarse-btn" className="text-decoration-none px-2 py-1 rounded-4 "  href="">Registrarse</a></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
