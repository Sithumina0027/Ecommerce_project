import React from 'react';
import './Nav.css';  
import { HiMiniShoppingCart } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (


        <nav className="nav-container">
            
             <ul className="nav-links">
                 
             <li><Link to="/home">Home</Link></li>
                <li><Link to="/vegifruits">Vegitebles & Fruits</Link></li>
                <li><Link to="/grocery">Grocery Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/Terms">T & C</Link></li>

                    </ul>
                  
            <div className="nav-left">
            <div className="search-container">
                <input type="text" placeholder="Search products..." className="search-input" />
                <button className="search-button">
                

                    <div className="cart-container">
                    <a href="/cart" className="cart-link">
                        <HiMiniShoppingCart className="cart-icon"/>
                        <span className="cart-count">3</span>
                    </a>

                    <div className="user-container">
                    <a href="/user-info" className="user-link">
                        <HiUserCircle className="user-icon"/>
                    </a>
                    </div>
                    </div>

                    </button>
                </div>
            </div>
        </nav>
    
    );
};

export default Nav;

/*import React from 'react';
import './Nav.css';  
import { HiMiniShoppingCart } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/vegitebles">Vegitebles</Link></li>
                <li><Link to="/fruits">Fruits</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>

            <div className="nav-left">
                <div className="search-container">
                    <input type="text" placeholder="Search products..." className="search-input" />
                    <button className="search-button">
                     
                    </button>

                    <div className="cart-container">
                        <Link to="/cart" className="cart-link">
                            <HiMiniShoppingCart className="cart-icon" />
                            <span className="cart-count">0</span>
                        </Link>

                        <div className="user-container">
                            <Link to="/profile" className="user-link">
                                <HiUserCircle className="user-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;*/
