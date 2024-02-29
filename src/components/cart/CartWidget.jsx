import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"
import CartContext from '../context/CartContext';
import React, { useContext } from 'react';
import { sumaQuantities } from '../utilidad/sumQuantitiesCart';
import Button from '../commons/buttons/Buttons';
import Item from '../Item/Item'



function CarWidget({ isShowModal }) {
  const { itemsCart, clearCart } = useContext(CartContext);

  const total = itemsCart.reduce((acc, item) => acc + (parseFloat(item.precio) * parseInt(item.cantidad)), 0);


  const handleClearCart = () => {
    clearCart();
  };


  return (
    <div className="containerCart">
      <ShoppingCartIcon className="cartIcon" />
      <span className='cartNumber'>{sumaQuantities(itemsCart, total)}</span>
      <span className='cartNumber'>{itemsCart.length}</span>
      {/* {isShowModal && <ListProductCart />} */}
      <div className="cartTotal">Total: ${total.toFixed(2)}</div>
      <Button onClick={handleClearCart}>
      Limpiar Carrito
      </Button>

      {itemsCart.map(item => (
        <Item className='agregados'
        key={item.id}
        Name={item.Name}
        cantidad={item.cantidad}
        img={item.img}
        id={item.id}
        precio={item.precio}
        descripcion={item.descripcion}
        />
      ))}
    </div>
  );
}

export default CarWidget;
