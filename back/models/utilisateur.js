const mongoose = require('mongoose');

const participantSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, default: () => {
    // Génération de votre identifiant personnalisé
    return generateCustomId();
  } },
  age: { type: Number, required: true },
  numtel :{ type: Number, required: true },
});

module.exports = mongoose.model('participant', participantSchema);