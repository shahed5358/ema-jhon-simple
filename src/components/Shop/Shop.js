import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, serProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => serProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        //do not do this: cart.push(product);
        const nerCart = [...cart, product];
        setCart(nerCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;