import './listStyles.css';
import { useEffect, useState } from 'react';
import {
  getProducts,
  getProductsByCategory,
} from '../../serverMock/ProductsMocks';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../commons/Spinner/Spinner';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   

    const fetchProducts = async () => {
      const asyncFunc = categoriaId ? getProductsByCategory : getProducts;
      setIsLoading(true);
      try {
        const res = await asyncFunc(categoriaId);
        setItems(res);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [categoriaId, setIsLoading]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;