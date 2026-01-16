import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <div className="contact-content">
                    <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
                    <p className="contact-description">
                        Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea innovadora o necesitas ayuda para escalar tu negocio, hablemos.
                    </p>
                    <a href="mailto:hola@manuelcogollo.com" className="email-link">hola@manuelcogollo.com</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
