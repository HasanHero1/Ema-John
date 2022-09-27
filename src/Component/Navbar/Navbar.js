import React from 'react';
import Logo from '../../Logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className="logo">
                <img src={Logo} alt=""></img>
            </div>
            <div className="nav-item">
                <a className='active' href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Order</a>
                <a href="/">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;