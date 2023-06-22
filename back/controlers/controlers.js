const participant = require('../models/participant')


exports.createParticipant = (req,res,next)=>{
    const newParticipant = new participant ({
      nom : req.body.nom,
      email : req.body.email, 
      tel : req.body.tel,
      profession : req.body.profession,});
  
      
      newParticipant.save()
      .then(()=>res.status(201).json({ message : 'participant ajouté'}))
      .catch(error => res.status(400).json({error}));
  
  }



  exports.getAllParticipants =async (req, res) => {
    try {
      const participants = await participant.find();
      res.json(participants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  

  exports.getOneParticipant = (req, res, next) => {
    participant.findOne({ _id: req.params.id })
      .then(participant => res.status(200).json(participant))
      .catch(error => res.status(404).json({ error }));
  }

  exports.deleteParticipant = (req, res, next) => {
    participant.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'participant supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  }