import './navbar.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from './../../App';

export default function Navbar() {
    const [user, setUser] = useContext(userContext);
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="#">Book Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Admin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Deals</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{user.name}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
