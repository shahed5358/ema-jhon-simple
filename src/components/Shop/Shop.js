import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, serProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => serProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3>This is products : {products.length}</h3>
            </div>
            <div className="cart-container">
                <h4>order summarry</h4>
            </div>
        </div>
    );
};

export default Shop;