import './detalleStyles.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import Button from '../commons/buttons/Buttons';
import { Link } from 'react-router-dom';
import CartContext from  '../context/CartContext';

function ItemDetail({ Name, categoria, precio, cantidad, img, descripcion, id }) {
    const { addItems } = useContext(CartContext);
    const [productQuantity, setProductQuantity] = useState(0);

const onAdd = (quantity) => {
    setProductQuantity(quantity);
    const item = {
        precio,
        Name,
        quantity,
    };
    addItems(item);
};

return (
    <div className="itemDetail" key={id}>
        <img src={img} alt={Name} />
        <h3>{Name}</h3>
        <p> {descripcion}</p>
        <p>stock: {cantidad} </p>
        <p>Categoria: {categoria}</p>
        <div className="actionCardDetail">
            {productQuantity > 0 ? (
                <Link to="/cart">
                    <Button>Finalizar Compra</Button>
                </Link>
            ) : (
                <ItemCount onAdd={onAdd} />
            )}
        </div>
    </div>
);
            }

export default ItemDetail;