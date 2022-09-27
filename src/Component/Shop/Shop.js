import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect( () => {
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2 className='product-length'>Total Product: {products.length}</h2>
                <div className='product-cart-container'>
                {
                    products.map( product => <Product key={product.id} name={product.name} category={product.category} img={product.img} price={product.price}></Product>)
                }
                </div>
            </div>
            <div className="cart-container">
                <h3>Order Item</h3>
            </div>
        </div>
    );
};

export default Shop;