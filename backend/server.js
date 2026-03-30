const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./config');
const Message = require('./models/Message');
const authRoutes = require('./routes/auth');

// Charger les variables d'environnement
dotenv.config();

// Changer au répertoire cms-ratt pour que les chemins relatifs fonctionnent
process.chdir(path.join(__dirname, '..'));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes d'authentification
app.use('/api/auth', authRoutes);

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Connexion à MongoDB
connectDB();

// Route API pour envoyer le message "hello" (depuis la base de données)
app.get('/api/hello', async (req, res) => {
  try {
    // Chercher le premier message dans la DB
    let message = await Message.findOne();
    
    // Si aucun message n'existe, le créer
    if (!message) {
      message = await Message.create({ text: 'hello' });
    }
    
    res.json({ message: message.text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route GET pour récupérer tous les messages
app.get('/api/message', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({ messages });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route POST pour créer un nouveau message
app.post('/api/message', async (req, res) => {
  try {
    const { text } = req.body;
    const newMessage = await Message.create({ text });
    res.json({ message: newMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✓ Serveur lancé sur http://localhost:${PORT}`);
  console.log(`✓ Accédez à http://localhost:${PORT} pour voir le frontend`);
});
