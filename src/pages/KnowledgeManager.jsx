import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './KnowledgeManager.css';

const KnowledgeManager = () => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Software',
        problem: '',
        solution: '',
        tags: ''
    });

    const API_URL = 'http://localhost:5000/api/knowledge';

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            fetchArticles();
            return;
        }
        setIsSearching(true);
        try {
            const response = await fetch(`${API_URL}/search?q=${searchQuery}`);
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Search error:', error);
        } finally {
            setIsSearching(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim())
        };

        try {
            const url = isEditing ? `${API_URL}/${isEditing}` : API_URL;
            const method = isEditing ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setFormData({ title: '', category: 'Software', problem: '', solution: '', tags: '' });
                setIsEditing(null);
                fetchArticles();
                alert(isEditing ? 'Artículo actualizado' : 'Artículo creado');
            }
        } catch (error) {
            console.error('Error saving article:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Eliminar este artículo?')) return;
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            fetchArticles();
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    const startEdit = (article) => {
        setIsEditing(article._id);
        setFormData({
            title: article.title,
            category: article.category,
            problem: article.problem,
            solution: article.solution,
            tags: article.tags.join(', ')
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="knowledge-page">
            <header className="knowledge-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Gestor de Conocimiento IT
                    </motion.h1>
                    <p>Soluciones inteligentes para problemas técnicos comunes</p>

                    <form className="search-bar" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Describe el error o problema (ej: error 404, impresora no conecta)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" disabled={isSearching}>
                            {isSearching ? 'Buscando...' : 'Consultar IA'}
                        </button>
                    </form>
                </div>
            </header>

            <main className="container knowledge-main">
                <div className="knowledge-tabs">
                    <button
                        className={!showAdmin ? 'active' : ''}
                        onClick={() => setShowAdmin(false)}
                    >
                        Repositorio de Soluciones
                    </button>
                    <button
                        className={showAdmin ? 'active' : ''}
                        onClick={() => setShowAdmin(true)}
                    >
                        Panel de Administración
                    </button>
                </div>

                {!showAdmin ? (
                    <div className="articles-grid">
                        <AnimatePresence>
                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <motion.article
                                        key={article._id}
                                        className="knowledge-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        layout
                                    >
                                        <div className="card-badge">{article.category}</div>
                                        <h3>{article.title}</h3>
                                        <div className="problem-section">
                                            <strong>Problema:</strong>
                                            <p>{article.problem}</p>
                                        </div>
                                        <div className="solution-section">
                                            <strong>Solución Sugerida:</strong>
                                            <p>{article.solution}</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tags">
                                                {article.tags.map((tag, i) => (
                                                    <span key={i} className="tag">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))
                            ) : (
                                <p className="no-results">No se encontraron soluciones. Intenta con otras palabras clave.</p>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="admin-section">
                        <motion.form
                            className="crud-form"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h3>{isEditing ? 'Editar Artículo' : 'Nuevo Artículo de Conocimiento'}</h3>
                            <div className="form-group">
                                <label>Título del Problema</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Ej: Pantallazo azul en Windows 11"
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Categoría</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option>Software</option>
                                        <option>Hardware</option>
                                        <option>Redes</option>
                                        <option>Ciberseguridad</option>
                                        <option>IA / Bots</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Etiquetas (separadas por coma)</label>
                                    <input
                                        type="text"
                                        value={formData.tags}
                                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                        placeholder="win11, crash, kernel"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Descripción del Problema</label>
                                <textarea
                                    required
                                    rows="3"
                                    value={formData.problem}
                                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Solución Paso a Paso</label>
                                <textarea
                                    required
                                    rows="5"
                                    value={formData.solution}
                                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn-save">
                                    {isEditing ? 'Actualizar Artículo' : 'Guardar en Repositorio'}
                                </button>
                                {isEditing && (
                                    <button type="button" className="btn-cancel" onClick={() => setIsEditing(null)}>
                                        Cancelar
                                    </button>
                                )}
                            </div>
                        </motion.form>

                        <div className="admin-list">
                            <h3>Gestionar Artículos</h3>
                            {articles.map(article => (
                                <div key={article._id} className="admin-item">
                                    <div className="item-info">
                                        <h4>{article.title}</h4>
                                        <span>{article.category}</span>
                                    </div>
                                    <div className="item-actions">
                                        <button onClick={() => startEdit(article)}>Editar</button>
                                        <button onClick={() => handleDelete(article._id)} className="delete">Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default KnowledgeManager;
