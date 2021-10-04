import './main.css';
import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import muhammad from '../../../img/muhammad.jpg';
import { Link } from 'react-router-dom';
import Inventory from './../../Inventory/Inventory';
import AddBook from './../AddBook/AddBook';
import ManageBook from './../ManageBook/ManageBook';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function MainDashboard() {
    return (
        <Router>
            <Switch>
                <Route path="/adminPanel/manageBook">
                    <ManageBook />
                </Route>
                <Route path="/adminPanel/inventory">
                    <Inventory />
                </Route>
                <Route path="/adminPanel/addBook">
                    <AddBook />
                </Route>
            </Switch>
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                    <i className="fas fa-bars"></i>
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a href="#">Book Shop</a>
                            <div id="close-sidebar">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        <div className="sidebar-header">
                            <div className="user-pic">
                                <img className="img-responsive img-rounded" src={muhammad}
                                    alt="User picture" />
                            </div>
                            <div className="user-info">
                                <span className="user-name">
                                    <strong>Muhammad Al-amin</strong>
                                </span>
                                <span className="user-role">Administrator</span>
                                <span className="user-status">
                                    <i className="fa fa-circle"></i>
                                    <span>Online</span>
                                </span>
                            </div>
                        </div>
                        {/* <!-- sidebar-header  --> */}
                        <div className="sidebar-search">
                            <div>
                                <div className="input-group">
                                    <input type="text" className="form-control search-menu" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- sidebar-search  --> */}
                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu">
                                    <span>General</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <Link to="/adminPanel/manageBook">
                                        <i className="fa fa-tachometer-alt"></i>
                                        <span>Manage Book</span>
                                        <span className="badge badge-pill badge-warning">New</span>
                                    </Link>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Dashboard 1
                                                    <span className="badge badge-pill badge-success">Pro</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span>E-commerce</span>
                                    </a>
                                    <Link to="/adminPanel/inventory">
                                        <i class="fas fa-plus"></i>
                                        <span>Inventory</span>
                                        <span className="badge badge-pill badge-danger"></span>
                                    </Link>
                                    <Link to="/adminPanel/addBook">
                                        <i class="fas fa-plus"></i>
                                        <span>Add Book</span>
                                        <span className="badge badge-pill badge-danger"></span>
                                    </Link>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Products

                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Orders</a>
                                            </li>
                                            <li>
                                                <a href="#">Credit cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="far fa-gem"></i>
                                        <span>Components</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">General</a>
                                            </li>
                                            <li>
                                                <a href="#">Panels</a>
                                            </li>
                                            <li>
                                                <a href="#">Tables</a>
                                            </li>
                                            <li>
                                                <a href="#">Icons</a>
                                            </li>
                                            <li>
                                                <a href="#">Forms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-chart-line"></i>
                                        <span>Charts</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Pie chart</a>
                                            </li>
                                            <li>
                                                <a href="#">Line chart</a>
                                            </li>
                                            <li>
                                                <a href="#">Bar chart</a>
                                            </li>
                                            <li>
                                                <a href="#">Histogram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- sidebar-menu  --> */}
                    </div>
                    {/* <!-- sidebar-content  --> */}
                    <div className="sidebar-footer">
                        <a href="#">
                            <i className="fa fa-bell"></i>
                            <span className="badge badge-pill badge-warning notification">3</span>
                        </a>
                        <a href="#">
                            <i className="fa fa-envelope"></i>
                            <span className="badge badge-pill badge-success notification">7</span>
                        </a>
                        <a href="#">
                            <i className="fa fa-cog"></i>
                            <span className="badge-sonar"></span>
                        </a>
                        <a href="#">
                            <i className="fa fa-power-off"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </Router>
    )
}
