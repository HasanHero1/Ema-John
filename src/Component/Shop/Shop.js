import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {

    const [cart, setCart] = useState([]);
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const addToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2 className='product-length'>Total Product: {products.length}</h2>
                <div className='product-cart-container'>
                {
                    products.map( product => <Product key={product.id} name={product.name} category={product.category} img={product.img} price={product.price} addToCart={addToCart}></Product>)
                }
                </div>
            </div>
            <div className="cart-container">
                <h3>Order Item</h3>
                <h5>Selected Item: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;