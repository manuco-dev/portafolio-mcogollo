import { m } from 'motion/react';
import { EASE } from '../motion';
import './Services.css';

const services = [
    {
        title: "Desarrollo de Software",
        icon: "💻",
        items: [
            "Aplicaciones web, landing pages, tiendas virtuales, carritos de compra, etc."
        ]
    },
    {
        title: "Inteligencia Artificial y Automatización",
        icon: "🤖",
        items: [
            "Soluciones inteligentes con IA.",
            "Automatización de procesos y tareas."
        ]
    },
    {
        title: "Soporte Técnico y Recuperación de Datos",
        icon: "🛠️",
        items: [
            "Mantenimiento de computadores e impresoras.",
            "Diagnóstico y reparación de equipos.",
            "Recuperación de datos e información.",
            "Soporte técnico remoto y presencial.",
            "Mantenimiento e instalación de infraestructura en redes y servidores."
        ]
    },
    {
        title: "Redes e Infraestructura TI",
        icon: "🌐",
        items: [
            "Instalación y configuración de redes.",
            "Conectividad e infraestructura tecnológica.",
            "Configuración de equipos de red."
        ]
    },
    {
        title: "Software y Licenciamiento",
        icon: "🖥️",
        items: [
            "Instalación y configuración de Windows y Office.",
            "Asesoría y licenciamiento de software original."
        ]
    },
    {
        title: "Marketing Digital y Redes Sociales",
        icon: "📱",
        items: [
            "Gestión y optimización de páginas en redes sociales (Facebook, Instagram, LinkedIn, YouTube, etc.).",
            "Estrategias de marketing digital para aumentar tu presencia online.",
            "Creación de contenido y campañas publicitarias en Facebook Ads."
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <m.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Servicios Especializados
                </m.h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <m.div
                            key={service.title}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.08, duration: 0.55, ease: EASE }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <ul className="service-list">
                                {service.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;