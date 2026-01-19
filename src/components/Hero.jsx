import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="container hero-container">
                <h2 className="hero-greeting">Hola, soy Manuel</h2>
                <h1 className="hero-title">
                    Ingeniero de Sistemas <br />
                    <span className="text-accent">& Desarrollador</span>
                </h1>
                <p className="hero-description">
                    Construyo soluciones digitales robustas y escalables con un enfoque en diseño limpio y alto rendimiento.
                </p>
                <div className="hero-actions">
                    <a href="#portfolio" className="btn btn-primary">Ver Proyectos</a>
                    <Link to="/contact" className="btn btn-secondary">Hablemos</Link>
                </div>
            </div>
            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
