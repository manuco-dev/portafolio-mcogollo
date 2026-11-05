import { motion } from 'framer-motion';
import './Portfolio.css';

const projects = [
    {
        title: "Concurso DIAN",
        category: "Web App / Educación",
        image: "/concurso-dian.webp",
        link: "https://www.concursodian.online/"
    },
    {
        title: "Distribuciones JK",
        category: "Web App / Construcción",
        image: "/distribuciones-jk.webp",
        link: "https://www.distribucionesjk.com/"
    },
    {
        title: "Distribuciones VIP",
        category: "Web App / Retail",
        image: "/distribuciones-vip.webp",
        link: "https://www.distribucionesvip.com/"
    },
    {
        title: "Prueba Firma",
        category: "Web App / Utilidad",
        image: "/prueba-firma.png",
        link: "https://prueba-firma.netlify.app/"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Proyectos Destacados
                </motion.h2>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={`Captura de ${project.title}`}
                                    className="project-image"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="project-overlay">
                                    <span>Ver Proyecto</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
