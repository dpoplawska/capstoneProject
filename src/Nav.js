import './NavBar.css';
import logo from "./media/Logo.svg"
import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';

export default function Nav() {
    return (
        <nav>
            <ul class="container">
                <li><Link to="/"><img id="logo" src={logo} alt="Little Lemon logo" /></Link></li>
                <li><Link to="/" id='homeLink'>Home</Link></li>
                <li><Link to="/about" id='aboutLink'>About</Link></li>
                <li><Link to="/menu" id='menuLink'>Menu</Link></li>
                <li><Link to="/reservations" id='reservationsLink'>Reservations</Link></li>
                <li><Link to="/delivery" id='orderOnlineLink'>Order online</Link></li>
                <li><Link to="/login" className='loginLink'>Login</Link></li>
            </ul>
        </nav>
    )
}
