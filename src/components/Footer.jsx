import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Manuel Cogollo. Todos los derechos reservados.</p>
                </div>
                <div className="footer-right">
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
