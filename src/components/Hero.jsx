import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="container hero-container">
                <motion.h2
                    className="hero-greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hola, soy Manuel
                </motion.h2>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Ingeniero de Sistemas <br />
                    <span className="text-accent">Full Stack & Soporte IT</span>
                </motion.h1>
                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Especialista en Soporte IT Nivel 2 y Desarrollo Full Stack potenciado por Inteligencia Artificial. Automatización con agentes de IA, soporte avanzado y soluciones robustas para el sector gobierno y privado.
                </motion.p>
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a href="#portfolio" className="btn btn-primary">Ver Proyectos</a>
                    <Link to="/contact" className="btn btn-secondary">Hablemos</Link>
                </motion.div>
            </div>
            <motion.div
                className="hero-bg-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
        </section>
    );
};

export default Hero;
