const express =require ('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');



const participant = require('./models/participant')

const participantsRoutes = require('../back/routes/routes');

//connection de la base de donnée 

mongoose.connect('mongodb+srv://bahamlaouhi2:test1111@cluster0.vrh8fpr.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



// express app
const app =express()

//listen for request 

app.listen(3000,()=>{
    console.log('listening on port 3000')
})

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(bodyParser.json());

app.get('/participants', async (req, res) => {
  try {
    const participants = await participant.find();
    res.json(participants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});


app.get('/participants/:id', (req, res, next) => {
  participant.findOne({ _id: req.params.id })
    .then(participant => res.status(200).json(participant))
    .catch(error => res.status(404).json({ error }));
})


app.delete('/participants/:id', (req, res, next) => {
  participant.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'participant supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})


app.post('/participants', async (req, res) => {
  const newParticipant = new participant({
    nom: req.body.nom,
    email: req.body.email,
    tel: parseInt(req.body.tel),
    profession: req.body.profession,
  });

  await newParticipant
    .save()
    .then(() => res.status(201).json(newParticipant))
    .catch((error) => res.status(400).json({ error }));
});

// Update the button state for a participant
app.patch('/participants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { isButtonClicked } = req.body;

    const updatedParticipant = await participant.findByIdAndUpdate(
      id,
      { isButtonClicked },
      { new: true }
    );

    res.json(updatedParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});


module.exports = app;

