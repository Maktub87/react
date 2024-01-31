import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"


function CarWidget({ number, clickEnCarrito, isShowModal }) {
  return (
    <div className="containerCart">
      <ShoppingCartIcon className="cartIcon" />
      <span className="cartNumber">{number}</span>
      {/* {isShowModal && <ListProductCart />} */}
    </div>
  );
}

export default CarWidget;
