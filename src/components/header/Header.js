import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Header.css';
import logo from '../../image/logo1.jpg';

const Header = () => {
    const navigate = useNavigate();

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('userData');

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/login');
    };

    return (
        <header>
            <div className="auth-links">
                {!isLoggedIn ? (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                ) : (
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                )}
            </div>
            <div className="nav-right">
                <img src={logo} alt="Market Logo" className="market-logo" />
            </div>
        </header>
    );
};

export default Header;
