
import { Remove } from '@mui/icons-material';
import './contador.css';
import {useState} from 'react';


function Counter() {
    const [valor , setValor]= useState(0);

    const add = ()=>{
      setValor(valor +1)
    }
    const rem = ()=>{
      setValor(valor -1)
    }

  return (
    <div className='contador'>
        <p>{valor}</p>
        <button className='boton' onClick={rem}>-</button>
        <button className='boton' onClick={add}>+</button>
      
    </div>
  );
}

export default Counter
