import './navbar.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from './../../App';


export default function Navbar() {
    const [user, setUser] = useContext(userContext);

    // sign out
    const clickSignOutUser = () => {
        const newUser = { ...user };
        newUser.name = '';
        setUser(newUser);
    }
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
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/adminPanel">Admin</Link>
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
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-user-circle"></i>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        {
                                            user.name && <Link className=" dropdown-item" to="#">{user.name}</Link>
                                        }
                                        {
                                            user.name ? <li><a onClick={() => clickSignOutUser()} className="dropdown-item" href="#">Sign Out</a></li> : <Link className=" dropdown-item" to="/login">Login</Link>
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
