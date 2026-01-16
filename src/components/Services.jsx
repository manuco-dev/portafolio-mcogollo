import './Services.css';

const services = [
    {
        title: "Desarrollo Web",
        description: "Creación de sitios web modernos, rápidos y responsivos utilizando las últimas tecnologías.",
        icon: "💻"
    },
    {
        title: "Arquitectura de Software",
        description: "Diseño de sistemas escalables y robustos para aplicaciones empresariales complejas.",
        icon: "🏗️"
    },
    {
        title: "Consultoría TI",
        description: "Asesoramiento experto para optimizar procesos y elegir las mejores herramientas tecnológicas.",
        icon: "💡"
    },
    {
        title: "Desarrollo Móvil",
        description: "Aplicaciones nativas y multiplataforma que ofrecen una experiencia de usuario excepcional.",
        icon: "📱"
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title">Mis Servicios</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
