import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-header">
                    <span className="section-subtitle">MI FILOSOFÍA</span>
                    <h2 className="section-title">Sobre mi enfoque</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Ingeniería con propósito.</h3>
                        <p>
                            No solo escribo código; construyo ecosistemas digitales que impulsan el crecimiento.
                            Mi enfoque combina la <strong>precisión técnica</strong> de la ingeniería de sistemas
                            con la <strong>creatividad</strong> del desarrollo web moderno.
                        </p>
                        <p>
                            Creo firmemente que la tecnología debe ser invisible: tan fluida y eficiente que el usuario
                            solo perciba el valor que aporta a su vida o negocio.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Años de Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Proyectos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Compromiso</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
