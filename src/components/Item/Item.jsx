import React from 'react';
import './itemStyles.css';

function Item({ Name, cantidad, img, id, precio, descripcion }) {
    return (
        <div className="item" key={id}>
            <img src={img} alt={Name} />
            <h3>{Name}</h3>
            <p>{descripcion}</p>
            <p>Precio : {precio}</p>
            <p>Stock disponible: {cantidad}</p>
        </div>
    );
}

export default Item;