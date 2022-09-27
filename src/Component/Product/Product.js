import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, category, price, img} = props;
    return (
        <div>
            <div className="product-cart">
                <div className="product-image">
                    <img src={img} alt='product-image'></img>
                </div>
                <div className="product-body">
                    <h3>{name}</h3>
                    <h4>Category: {category}</h4>
                    <h4>Price: ${price}</h4>
                </div>
                <button>Add To cart</button>
            </div>
        </div>
    );
};

export default Product;