const mongoose = require('mongoose');

// Schéma simple pour tester
const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    default: 'hello'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Créer le modèle
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
