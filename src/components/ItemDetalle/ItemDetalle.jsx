import './detalleStyles.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Button from '../commons/buttons/Buttons';
import { Link } from 'react-router-dom';

function ItemDetail({ Name, Categoria, cantidad, img, descripcion, id }) {
    const [itemAddCart, setItemAddCart] = useState(0);
    const onAdd = (quantity) => {
        setItemAddCart(quantity);
    };

    return (
        <div className="itemDetail" key={id}>
            <img src={img} alt={Name} />
            <h3>{Name}</h3>
            <p> {descripcion}</p>
            <p>stock: {cantidad} </p>
            <p>Categoria: {Categoria}</p>
            <div className="actionCardDetail">
                {itemAddCart > 0 ? (
                    <Link to="/cart">
                        <Button>Terminar Compra</Button>
                    </Link>
                ) : (
                    <ItemCount onAdd={onAdd} />
                )}
            </div>
        </div>
    );
}

export default ItemDetail;