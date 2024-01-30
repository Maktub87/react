import './listStyles.css';

import { useEffect, useState } from 'react';

import { getProducts } from '../../serverMock/ProductsMocks';



function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        getProducts().then((res) => setItems(res));
    }, [])

    return (
        <div className="container">
            <h1 className="title">{greeting}</h1>
            <div className="listItems">
                {items.map((item) => {
                    const { id,img, name, descripcion, precio } = item
                    return (
                        <div key={id} className="item">
                            <img src={img} alt={name}></img>
                            <h3>{name}</h3>
                            <p>{descripcion}</p>
                            <p>{precio}</p>

                        </div>

                    )
                })}
            </div>
        </div>
    );
}
export default ItemListContainer;