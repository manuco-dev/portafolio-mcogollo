import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">Manuel<span>.</span></Link>
                    <p className="footer-desc">
                        Ingeniero de Sistemas y Desarrollador apasionado por crear experiencias digitales excepcionales.
                    </p>
                    <div className="social-links-icons">
                        <a href="https://www.linkedin.com/in/manuco-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="https://github.com/manucogollo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>
                        <a href="https://twitter.com/manucogollo" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5-4.59 1.59-4.54-5.07-.3-6.6-4.24-4.8.9-10.4 7-8.4l1-1h1.5l1.5-1.5" /></svg>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Navegación</h4>
                    <ul className="footer-links">
                        <li><a href="/#about">Sobre mí</a></li>
                        <li><a href="/#services">Servicios</a></li>
                        <li><a href="/#portfolio">Portafolio</a></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul className="footer-links">
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Términos</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Manuel Cogollo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
