import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <motion.h2
                    className="hero-greeting"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    Hola, soy Manuel
                </motion.h2>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.04 }}
                >
                    Ingeniero de Sistemas <br />
                    <span className="text-accent">Desarrollador y Soporte IT</span>
                </motion.h1>
                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                >
                    Especialista en Soporte IT Nivel 2 y desarrollo de software potenciado por Inteligencia Artificial. Automatización con agentes de IA, soporte avanzado y soluciones robustas para el sector gobierno y privado.
                </motion.p>
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 }}
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
