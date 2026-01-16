import './Portfolio.css';

const projects = [
    {
        title: "E-Commerce Dashboard",
        category: "React / Node.js",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Finance App",
        category: "Mobile / Flutter",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Medical Platform",
        category: "Web App / Python",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        link: "#"
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
