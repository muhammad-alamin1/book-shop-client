import './bookcard.css';
import React from 'react';
import Orders from './../Orders/Orders';
import { Link } from 'react-router-dom';

export default function BookCard(props) {
    // console.log(props);
    const { img, title, author, price, bookCode } = props.book;

    return (
        <div className="" id="card-container">
            <div className="box">
                <img src={img} alt="img" className="img-fluid" />
                <div className="box-content">
                    <h5 id="card-title" className="title">{title}</h5>
                    <h6 id="card-description" className="post">{author}</h6>
                    <strong className="py-2">Code: {bookCode}</strong>
                </div>
                <div className="row">
                    <div className="col-6 price">
                        <h3><strong>${price}</strong></h3>
                    </div>
                    <div className="col-6 button">
                        <button onClick={() => { props.handleAddProduct(props.book) }} className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
