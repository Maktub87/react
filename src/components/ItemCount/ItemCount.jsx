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
        <button className="botonvalor" onClick={add}>+</button>
        <p className='valor'>{valor}</p>
      </div>
      <Button disabled={valor === 0} onClick={() => onAdd(valor)}>
        Agregar al carrito
      </Button>
    </>
  );
}

export default Counter;