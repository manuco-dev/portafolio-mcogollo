import { motion } from 'framer-motion';
import './TechStack.css';

const techGroups = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/black" },
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "shadcn/ui", icon: "https://cdn.simpleicons.org/shadcnui/black" } // Attempting shadcnui, fallback might be needed
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" }
        ]
    },
    {
        category: "Automatización & IA",
        items: [
            { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/FF6584" },
            { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/000000" },
            { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/D1D5DB" }, // Anthropic logo for Claude
            { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" }
        ]
    },
    {
        category: "Bases de Datos",
        items: [
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" }
        ]
    },

    {
        category: "Pasarelas de Pago",
        items: [
            { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
            { name: "Mercado Pago", icon: "https://cdn.simpleicons.org/mercadopago/009EE3" },
            { name: "PayPal", icon: "https://cdn.simpleicons.org/paypal/00457C" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const TechStack = () => {
    return (
        <section className="tech-stack-section">
            <div className="container">
                {/* 
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Stack Tecnológico
                </motion.h2>
                */}

                <div className="tech-groups-grid">
                    {techGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            className="tech-category-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <h3 className="category-title">{group.category}</h3>
                            <div className="category-grid">
                                {group.items.map((tech, i) => (
                                    <motion.div
                                        key={tech.name}
                                        className="tech-card"
                                        variants={itemVariants}
                                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                    >
                                        <div className="icon-wrapper">
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="tech-icon-img"
                                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                                            />
                                            <span style={{ display: 'none', fontSize: '2rem' }}>🔧</span>
                                        </div>
                                        <span className="tech-name">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
