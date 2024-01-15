import React from 'react';
import "./MenuStyles.css"

const MenuList = ({ onItemClick }) => {
    return (
        <ul className='listamenu'>
            <li><a href="#" onClick={() => onItemClick('Inicio')}>Inicio</a></li>
            <li><a href="#" onClick={() => onItemClick('Productos')}>Productos</a></li>
            <li><a href="#" onClick={() => onItemClick('Contacto')}>Contacto</a></li>
        </ul>
    );
};

export default MenuList;