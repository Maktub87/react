import { createContext, useState } from 'react';
import{ products} from '../../serverMock/ProductsMocks' 

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState([]);

    const addItems = (productId) => {
        // Encuentra el producto por su id en la lista de productos
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            setItemsCart(prevItems => [...prevItems, productToAdd]);
        }
    };

    const clearCart = () => {
        setItemsCart([]);


    };
    return (
        <CartContext.Provider value={{ itemsCart, addItems, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;