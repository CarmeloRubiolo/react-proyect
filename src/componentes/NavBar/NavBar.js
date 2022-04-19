import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="logo">
        <Link className="navbar-brand" to='/inicio'>
          <img src={"./imagenes/LogoMelo2.png"} />
        </Link>
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
              <Link class="" aria-current="page" href="#" to='/inicio'>
                Inicio
              </Link>
            </li>
            <li class="nav-item" className="enlace">
              <Link class="" href="#" to='/muestras'>
                Muestras
              </Link>
            </li>
            <li class="nav-item" className="enlace">
              <Link class="" href="#" to='/'>
                Arma tu tarjeta
              </Link>
            </li>
            <li class="nav-item dropdown" className="enlace">
              <Link href="#" to='contacto'>Contacto</Link>
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
