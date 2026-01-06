import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">PET Print Pro</div>
            <ul className="navbar-links">
                <li><a href="#hero">Start</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Supplies</a></li>
                <li><a href="#contact" className="btn-contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
