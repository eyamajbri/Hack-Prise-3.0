const mongoose = require('mongoose');

const participantSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true 
    
  },
  email :{
    type: String,
    required: true 
  },
  tel:{
    type: Number,
    required: true 
  },
  profession:{
    type:String,
    required: true 
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('participant', participantSchema);


