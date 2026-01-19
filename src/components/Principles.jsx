import './Principles.css';

const Principles = () => {
    const principles = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
            ),
            title: "Rendimiento primero",
            description: "Medimos, optimizamos y automatizamos: menos TTFB, más conversiones.",
            color: "blue"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            ),
            title: "Robustez",
            description: "Tipos estrictos, testing y pipelines estables en cada entrega.",
            color: "green"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
            ),
            title: "Diseño claro",
            description: "UI brutalista, jerarquías limpias y accesibles.",
            color: "blue"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            ),
            title: "Mantenibilidad",
            description: "Arquitectura modular, DX cuidada y documentación real.",
            color: "green"
        }
    ];

    return (
        <section className="section principles-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Principios</h2>
                </div>

                <div className="principles-grid">
                    {principles.map((item, index) => (
                        <div key={index} className="principle-card">
                            <div className={`principle-icon ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
