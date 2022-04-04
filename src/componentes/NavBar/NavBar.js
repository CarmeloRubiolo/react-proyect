import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="logo">
        <a class="navbar-brand" href="inicio">
          <img src={"./imagenes/LogoMelo2.png"} />
        </a>
      </div>
      <div className="btnMenu">
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button></div>
      
      <div class="d-flex" className="d-flex">
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" className="enlace">
              <a class="" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item" className="enlace">
              <a class="" href="#">
                Muestras
              </a>
            </li>
            <li class="nav-item" className="enlace">
              <a class="" href="#">
                Arma tu tarjeta
              </a>
            </li>
            <li class="nav-item dropdown" className="enlace">
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div>
          <CartWidget />
        </div>
      </div>
      </div>
      
    </nav>
  );
};
export default NavBar;
