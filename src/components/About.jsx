import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle">MI FILOSOFÍA</span>
                    <h2 className="section-title">Sobre mi enfoque</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Experiencia Integral en Tecnología.</h3>
                        <p>
                            Combino la capacidad de construcción del <strong>Desarrollo Full Stack</strong> con la disciplina operativa del <strong>Soporte IT Nivel 2</strong>.
                        </p>
                        <p>
                            Mi trayectoria en el <strong>sector gobierno</strong> me ha permitido aplicar estándares rigurosos y metodologías como <strong>ITIL</strong> para garantizar la continuidad y eficiencia de los servicios tecnológicos. No solo resuelvo problemas, optimizo ecosistemas completos.
                        </p>
                    </motion.div>

                    <div className="about-stats">
                        {[
                            { val: "5+", label: "Años de Exp." },
                            { val: "20+", label: "Proyectos" },
                            { val: "100%", label: "Compromiso" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="stat-item"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2, type: "spring" }}
                                viewport={{ once: true }}
                            >
                                <span className="stat-number">{stat.val}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
