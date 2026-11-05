import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../siteConfig';
import './Legal.css';

const Legal = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [hash]);

    return (
        <main className="legal-page">
            <div className="container legal-container">
                <h1 className="legal-title">Información legal</h1>
                <p className="legal-updated">Última actualización: noviembre de 2026</p>

                <section id="privacidad" className="legal-section">
                    <h2>Privacidad</h2>
                    <p>
                        Este sitio es el portafolio profesional de Manuel Cogollo. El responsable del
                        tratamiento de los datos es Manuel Cogollo, contactable en{' '}
                        <a href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>
                    <p><strong>Qué datos se recogen.</strong> Solo los que escribes voluntariamente en el formulario de contacto: nombre, correo electrónico, teléfono (opcional), asunto y mensaje.</p>
                    <p><strong>Para qué.</strong> Únicamente para responder a tu solicitud. No se usan para envíos comerciales, no se elaboran perfiles y no se venden ni ceden a terceros.</p>
                    <p><strong>Dónde se guardan.</strong> En una base de datos MongoDB gestionada por el responsable del sitio.</p>
                    <p><strong>Cuánto tiempo.</strong> Mientras sean necesarios para atender la solicitud y el seguimiento posterior.</p>
                    <p><strong>Tus derechos.</strong> Puedes solicitar acceso, rectificación o supresión de tus datos escribiendo a la dirección indicada arriba.</p>
                    <p>No se solicitan ni se tratan datos sensibles, ni datos de menores de edad.</p>
                </section>

                <section id="terminos" className="legal-section">
                    <h2>Términos de uso</h2>
                    <p>Este sitio tiene carácter informativo: presenta los servicios profesionales y algunos proyectos realizados.</p>
                    <p>El contenido, la marca y los materiales publicados pertenecen a Manuel Cogollo. No se autoriza su reproducción sin permiso previo.</p>
                    <p>Los enlaces a sitios de terceros se ofrecen como referencia. Cada uno tiene sus propias condiciones y políticas, sobre las que este sitio no tiene control.</p>
                    <p>La información se ofrece de buena fe, pero no constituye una cotización. Alcance, plazos y precios se acuerdan por escrito antes de iniciar cualquier trabajo.</p>
                    <p>Este sitio se rige por la legislación colombiana.</p>
                </section>

                <section id="cookies" className="legal-section">
                    <h2>Cookies y almacenamiento local</h2>
                    <p>Este sitio <strong>no utiliza cookies publicitarias ni de analítica de terceros</strong>.</p>
                    <p>
                        Sí guarda una entrada en el almacenamiento local del navegador (<code>localStorage</code>, clave <code>theme</code>) para recordar si prefieres el modo claro u oscuro. Ese dato se queda en tu dispositivo y no se envía a ningún servidor. Puedes borrarlo limpiando los datos del sitio desde la configuración de tu navegador.
                    </p>
                    <p>Las tipografías se cargan desde Google Fonts, que puede registrar la dirección IP desde la que se solicita el recurso.</p>
                    <p>El botón de WhatsApp abre un enlace externo; a partir de ahí se aplica la política de privacidad de WhatsApp.</p>
                </section>
            </div>
        </main>
    );
};

export default Legal;
