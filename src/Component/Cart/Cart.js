import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;

    for(const product of cart) {
        // console.log(product);
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    
    const tax = total * 10 / 100;
    const taxParse = parseFloat(tax);

    const grandTotal = total + shipping + taxParse;

    return (
        <div className='order-item'>
            <h3>Order Item</h3>
            <h5>Selected Item: {cart.length}</h5>
            <h6>Total Price: ${total}</h6>
            <h6>T.Shipping Charge: ${shipping}</h6>
            <h6>Tax: ${tax.toFixed(2)}</h6>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button>Delete Data From Local DB</button>
        </div>
    );
};

export default Cart;