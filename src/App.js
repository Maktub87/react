import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DetalleContainer from './components/ItemDetalleContainer/DetalleContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting={'¡Bienvenido, hora de comprar!'} />
          }
        />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<DetalleContainer />} />
        <Route path="*" element={<div> ERROR: 404, La página no existe</div>} />
      </Routes>
    </>
  );
}

export default App;