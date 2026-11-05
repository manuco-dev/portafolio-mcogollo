import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <main className="notfound-page">
            <div className="container notfound-inner">
                <span className="notfound-code">404</span>
                <h1 className="notfound-title">Esta página no existe</h1>
                <p className="notfound-text">
                    Puede que el enlace esté roto o que la página se haya movido.
                    Desde el inicio puedes ver los servicios y los proyectos.
                </p>
                <div className="notfound-actions">
                    <Link to="/" className="notfound-btn notfound-btn-primary">Volver al inicio</Link>
                    <Link to="/contact" className="notfound-btn notfound-btn-secondary">Contacto</Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
