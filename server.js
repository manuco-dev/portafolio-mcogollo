import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// --- Schemas ---

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Knowledge Article Schema
const knowledgeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true }, // e.g., 'Hardware', 'Software', 'Networks'
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    tags: [String],
    date: { type: Date, default: Date.now }
});

// Adding text index for search
knowledgeSchema.index({ title: 'text', problem: 'text', solution: 'text', tags: 'text' });

const Knowledge = mongoose.model('Knowledge', knowledgeSchema);

// --- Routes ---

// Contact Form Route
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ success: true, message: 'Message saved successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error saving message', error });
    }
});

// Knowledge Base CRUD Routes
app.get('/api/knowledge', async (req, res) => {
    try {
        const articles = await Knowledge.find().sort({ date: -1 });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching articles', error });
    }
});

app.post('/api/knowledge', async (req, res) => {
    try {
        const newArticle = new Knowledge(req.body);
        await newArticle.save();
        res.status(201).json({ success: true, article: newArticle });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating article', error });
    }
});

app.put('/api/knowledge/:id', async (req, res) => {
    try {
        const updatedArticle = await Knowledge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, article: updatedArticle });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating article', error });
    }
});

app.delete('/api/knowledge/:id', async (req, res) => {
    try {
        await Knowledge.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Article deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting article', error });
    }
});

// AI Search Route (Basic Search for now, can be expanded with OpenAI)
app.get('/api/knowledge/search', async (req, res) => {
    const { q } = req.query;
    try {
        // Use MongoDB text search
        const results = await Knowledge.find(
            { $text: { $search: q } },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } });

        res.json(results);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Search error', error });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
