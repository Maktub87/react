import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalleContainer/DetalleContainer';
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
        <Route path="/Categoria/:CategoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<div> ERROR: 404, La página no existe</div>} />
      </Routes>
    </>
  );
}

export default App;