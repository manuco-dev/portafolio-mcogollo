import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">Manuel<span>.</span></a>
                <ul className="nav-links">
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#portfolio">Portafolio</a></li>
                    <li><a href="#contact" className="cta-button">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
