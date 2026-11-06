import { m } from 'motion/react';
import { site } from '../siteConfig';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const whatsappUrl = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

    return (
        <m.div
            className="whatsapp-widget"
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 2
            }}
        >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-link" aria-label="Escribir por WhatsApp">
                <div className="avatar-container">
                    <img src="/whatsapp-avatar.webp" alt={site.name} className="avatar-img" width="70" height="70" />
                    <div className="online-badge"></div>
                    <div className="tooltip">¡Hola! ¿En qué puedo ayudarte?</div>
                </div>
            </a>
        </m.div>
    );
};

export default WhatsAppWidget;