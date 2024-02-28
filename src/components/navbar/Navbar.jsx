import '../navbar/navBarstyles.css';
import CarWidget from '../cart/CartWidget';
import Logo from '../assets/images/logopicaflor.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
  const [isShowModal, setIsShowModal] = useState(false);

  const clickEnCarrito = () => {
    setIsShowModal(true);
  };

  return (
    <nav className="navBar">
      <div className="container-logo">
        <Link to="/">
          <img src={Logo} alt="logoprincipal" className='logo' />
        </Link>
      </div>
      <ul className="categoryList">
        <li>
          <NavLink to="/categoria/Fertilizante">Fertilizantes</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/Macetas">Macetas</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/Sustratos">Sustratos</NavLink>
        </li>
        
      </ul>
      <CarWidget
        number={3}
        clickEnCarrito={clickEnCarrito}
        isShowModal={isShowModal}
      />
    </nav>
  );
}

export default Navbar;