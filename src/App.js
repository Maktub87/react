
import './App.css';

import Navbar from "./components/navbar/Navbar";

import Counter from "./components/Counter/Counter";

import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  return (
    <>
      <Navbar />

      <ItemListContainer greeting={'¡Bienvenido, hora de comprar!'} />

      <Counter />


    </>

  );
}

export default App;
