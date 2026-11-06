import { Link } from 'react-router-dom';
import { m } from 'motion/react';
import { EASE, fadeUp as item, stagger as container } from '../motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <m.div
                    className="hero-copy"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <m.h2 className="hero-greeting" variants={item}>
                        Hola, soy Manuel
                    </m.h2>
                    <m.h1 className="hero-title" variants={item}>
                        Ingeniero de Sistemas <br />
                        <span className="text-accent">Desarrollador y <br className="hero-br" />Soporte IT</span>
                    </m.h1>
                    <m.p className="hero-description" variants={item}>
                        Especialista en Soporte IT Nivel 2 y desarrollo de software potenciado por Inteligencia Artificial. Automatización con agentes de IA, soporte avanzado y soluciones robustas para el sector gobierno y privado.
                    </m.p>
                    <m.div className="hero-actions" variants={item}>
                        <a href="#portfolio" className="btn btn-primary">Ver Proyectos</a>
                        <Link to="/contact" className="btn btn-secondary">Hablemos</Link>
                    </m.div>
                </m.div>

                <m.figure
                    className="hero-photo"
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                >
                    <img
                        src="/manuel-retrato.webp"
                        alt="Retrato de Manuel Cogollo"
                        width="760"
                        height="950"
                        fetchPriority="high"
                    />
                </m.figure>
            </div>
            <m.div
                className="hero-bg-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></m.div>
        </section>
    );
};

export default Hero;
