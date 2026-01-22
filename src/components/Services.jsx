import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        title: "IA & Agentes Autónomos",
        description: "Creación de bots para WhatsApp y automatización de procesos con agentes de IA (OpenAI). La tecnología del futuro, hoy.",
        icon: "🤖"
    },
    {
        title: "Desarrollo con IA",
        description: "Utilizamos herramientas de IA de vanguardia para un desarrollo más rápido, creativo, robusto y con menos riesgos de seguridad.",
        icon: "⚡"
    },
    {
        title: "Desarrollo Full Stack",
        description: "Creación de aplicaciones web completas (Frontend y Backend) modernas, escalables y responsivas.",
        icon: "💻"
    },
    {
        title: "Seguridad de Redes & IDS",
        description: "Seguridad avanzada, firewalls, antivirus e implementación de IDS para detección de intrusos no autorizados.",
        icon: "🛡️"
    },
    {
        title: "Mantenimiento Hardware & CCTV",
        description: "Mantenimientos preventivos y correctivos a equipos de cómputo, impresoras y sistemas de cámaras CCTV.",
        icon: "🛠️"
    },
    {
        title: "Gestión TI & Gobierno",
        description: "Aplicación de mejores prácticas ITIL en entornos gubernamentales y privados de alta exigencia.",
        icon: "🏛️"
    },
    {
        title: "Recuperación de Datos",
        description: "Recuperación de información en discos duros, USB y cualquier medio magnético con total confidencialidad.",
        icon: "🔍"
    },
    {
        title: "Licenciamiento & SO",
        description: "Gestión y licenciamiento oficial para sistemas operativos Windows 10 / 11 y software corporativo.",
        icon: "📄"
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Servicios Especializados
                </motion.h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
