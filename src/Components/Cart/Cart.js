import './cart.css';
import React from 'react'

export default function Cart(props) {
    const { name, quantity, id, price } = props.product;

    return (
        <div className="review-items">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <br />
            <button
                className="main-btn"
            >Remove</button>
        </div>
    )
}
