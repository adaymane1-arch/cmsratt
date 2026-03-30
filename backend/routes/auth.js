const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Route REGISTER - créer un nouvel utilisateur
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Vérifier que l'utilisateur n'existe pas déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.json({ 
      message: 'Utilisateur créé avec succès',
      user: { id: newUser._id, username: newUser.username, email: newUser.email }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

// Route LOGIN - vérifier les identifiants
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Chercher l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Connexion réussie
    res.json({ 
      message: 'Connexion réussie',
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
});

module.exports = router;
