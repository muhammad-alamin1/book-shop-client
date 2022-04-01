import React from 'react';
import './cart.css';

export default function Cart(props) {
    const { title, price, quantity } = props.cart;
    const count = props.count;
    const totalPrice = props.price;

    return (
        <div className="review-items">
            <h5>Order Items: {count} </h5>
            <p>Name: {title}</p>
            <p>Price: ${totalPrice}</p>
            <br />
            <button
                className="main-btn"
            >Remove</button>
        </div>
    )
}
