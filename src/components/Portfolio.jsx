import './Portfolio.css';

const projects = [
    {
        title: "Mundo Vacacional CK",
        category: "Web App / Turismo",
        image: "/mundo-vacacional.png",
        link: "https://www.mundovacacionalck.com/"
    },
    {
        title: "InteliaSalud",
        category: "Web App / Salud",
        image: "/inteliasalud.png",
        link: "https://www.inteliasalud.com/"
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
                <h2 className="section-title">Proyectos Destacados</h2>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <span>Ver Proyecto</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
