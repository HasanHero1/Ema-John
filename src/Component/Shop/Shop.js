import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDB } from '../../Utilities/LocalDB';
import Cart from '../Cart/Cart';
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
        addToDB(product.id);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2 className='product-length'>Total Product: {products.length}</h2>
                <div className='product-cart-container'>
                {
                    products.map( product => <Product key={product.id} id={product.id} name={product.name} category={product.category} img={product.img} price={product.price} addToCart={addToCart} shipping={product.shipping}></Product>)
                }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;