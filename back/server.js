const express =require ('express')
const mongoose = require('mongoose');

//connection de la base de donnée 

mongoose.connect('mongodb+srv://bahamlaouhi2:test1122@cluster0.vrh8fpr.mongodb.net/?retryWrites=true&w=majority',
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


app.use((req ,res)=>{
    res.json({message :"hello world"})
})


module.exports = app;
