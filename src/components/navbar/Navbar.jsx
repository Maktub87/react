import React from 'react';
import './navBarstyles.css';
import MenuList from '../Menu/menuNav';
import CartWidget from '../cart/CartWidget';
import logo from '../assets/images/logopicaflor.png';
function Navbar() {
  const handleMenuClick = (item) => {
    console.log(`Click en ${item}`);
    
  };

  return (
    <body >
      
    <div className="navBar">
      <img src={logo} alt="logoprincipal" className='logo'/>
      <h1>GSP Picaflor</h1>
      <MenuList onItemClick={handleMenuClick} />
      <CartWidget number={7} />
    </div>
    </body>
  );
}

export default Navbar;