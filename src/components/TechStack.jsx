import { motion } from 'framer-motion';
import './TechStack.css';

const techStack = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "OpenAI", category: "AI Agents", icon: "🤖" },
    { name: "AI-Driven Dev", category: "Modern Core", icon: "⚡" },
    { name: "Cybersecurity", category: "Security", icon: "🛡️" },
    { name: "WhatsApp API", category: "Automation", icon: "📲" },
    { name: "ITIL", category: "Methodology", icon: "📋" },
    { name: "Support L2", category: "IT Operations", icon: "🛠️" },
    { name: "CCTV / HW", category: "Maintenance", icon: "📹" },
    { name: "Windows 11", category: "OS Expert", icon: "🪟" },
    { name: "Government", category: "Sector", icon: "🏛️" },
    { name: "Databases", category: "Management", icon: "🗄️" },
];

const TechStack = () => {
    return (
        <section className="tech-stack-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Tecnologías & Herramientas
                </motion.h2>
                <div className="tech-grid">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="tech-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <span className="tech-icon">{tech.icon}</span>
                            <div className="tech-info">
                                <h4 className="tech-name">{tech.name}</h4>
                                <span className="tech-category">{tech.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
