// Importe les modules nécessaires
const express = require('express');
const mongoose = require('mongoose'); 

// Crée une application Express
const app = express();
const port = 3000;

// Configure l'application pour utiliser JSON
app.use(express.json());

// URI pour se connecter à la base de données MongoDB
const dbURI = 'mongodb://user:projectreact@db:27017/dockerdata?authSource=admin';

// Connexion à la base de données MongoDB
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected to database'))  // Connexion réussie
    .catch((err) => console.error(err));  // Gère les erreurs de connexion

// Modèle Mongoose pour une règle
const Rule = mongoose.model('Rule', new mongoose.Schema({
    title: String,
    description: String,
    likes: Number,
    dislikes: Number,
    tags: [String],
}));

// Route pour obtenir toutes les règles
app.get('/api/rules', (req, res) => {
    Rule.find()  // Recherche toutes les règles dans la base de données
        .then((result) => {
            res.json(result);  // Envoie les règles en tant que JSON
        })
        .catch((err) => {
            res.status(500).json({ error: 'An internal error has occurred.' });  // Gère les erreurs
        });
});

// Route pour dire bonjour
app.get('/api/hello', (req, res) => {
    res.send('Hello World!');  // Envoie "Hello World!" en réponse
});

// Route pour ajouter une règle
app.post('/api/rules', (req, res) => {
    const newRule = new Rule(req.body);  // Crée une nouvelle règle avec les données reçues

    newRule.save()  // Sauvegarde la nouvelle règle dans la base de données
        .then((result) => {
            res.json({ message: 'Rule added.', newRuleId: result._id });  // Envoie un message de succès
        })
        .catch((err) => {
            res.status(500).json({ error: 'Can\'t add a rule.' });  // Gère les erreurs
        });
});

// Route pour supprimer une règle
app.delete('/api/rules/:id', (req, res) => {
    const ruleId = req.params.id;  // Obtient l'ID de la règle à supprimer

    Rule.findByIdAndDelete(ruleId)  // Supprime la règle avec l'ID donné
        .then((result) => {
            res.json({ message: 'Rule deleted' });  // Envoie un message de succès
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error when deleting rule.' });  // Gère les erreurs
        });
});

// Démarre le serveur
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);  // Affiche un message quand le serveur est prêt
});
