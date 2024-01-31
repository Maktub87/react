import React from 'react';
import './counterStyles.css';
import { useCount } from '../hooks/hook';
import Button from '../commons/buttons/Buttons';

function Counter({ onAdd }) {
  const { add, subtraction, valor } = useCount(0, 0, 4);
  return (
    <>
      <div className="counter">
        <button onClick={subtraction}>-</button>
        <p>{valor}</p>
        <button onClick={add}>+</button>
      </div>
      <Button disabled={valor === 0} onClick={() => onAdd(valor)}>
        Agregar al carrito
      </Button>
    </>
  );
}

export default Counter;