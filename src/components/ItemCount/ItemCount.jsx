import React from 'react';
import './counterStyles.css';
import { useCount } from '../hooks/hook';
import Button from '../commons/buttons/Buttons';

function Counter({ onAdd }) {
  const { add, subtraction, valor } = useCount(0, 0, 12);
  return (
    <>
      <div className="counter">
        <button className="botonvalor" onClick={subtraction}>-</button>
        <p className='valor'>{valor}</p>
        <button className="botonvalor" onClick={add}>+</button>
      </div>
      <Button className="btnagregar" disabled={valor === 0} onClick={() => onAdd(valor)}>
        Agregar al carrito
      </Button>
    </>
  );
}

export default Counter;