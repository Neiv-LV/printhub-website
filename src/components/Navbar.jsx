import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="logo-print">Print</span>
                <span className="logo-hub">hub</span>
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><a href="index.html" onClick={closeMenu}>Trang chủ</a></li>
                <li><a href="bang-gia.html" onClick={closeMenu}>Bảng giá</a></li>
                <li><a href="huong-dan-file.html" onClick={closeMenu}>Hướng dẫn</a></li>
                <li><a href="cau-hoi.html" onClick={closeMenu}>Hỏi đáp</a></li>
                <li><a href="blog.html" onClick={closeMenu}>Blog</a></li>
                <li><a href="#contact" onClick={closeMenu}>Liên hệ</a></li>
            </ul>
            <div className="auth-buttons">
                <a href="tel:+84906688013" className="btn-contact">Liên hệ ngay</a>
            </div>
            <button
                className={`mobile-toggle ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
