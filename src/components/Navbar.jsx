import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Set initial theme
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo" onClick={closeMenu}>Manuel<span>.</span></Link>

                <div className="nav-controls">
                    <button onClick={toggleTheme} className="theme-toggle mobile-only" aria-label="Toggle theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/#about" onClick={closeMenu}>Sobre mí</a></li>
                    <li><a href="/#services" onClick={closeMenu}>Servicios</a></li>
                    <li><a href="/#portfolio" onClick={closeMenu}>Portafolio</a></li>
                    <li><Link to="/contact" className="cta-button" onClick={closeMenu}>Contacto</Link></li>
                    <li className="desktop-only">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
