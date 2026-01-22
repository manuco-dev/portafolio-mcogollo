import { motion } from 'framer-motion';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const phoneNumber = "573013730306";
    const message = "Hola Manuel, vi tu portafolio y me gustaría contactarte.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                <div className="avatar-container">
                    <img src="/whatsapp-avatar.png" alt="Manuel IT Support" className="avatar-img" />
                    <div className="online-badge"></div>
                    <div className="tooltip">¡Hola! ¿En qué puedo ayudarte?</div>
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppWidget;
