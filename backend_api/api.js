const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // Importez le module Pool de pg
const app = express();
const port = 3000;

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bdd',
  password: 'password',
  port: '5432',
});

app.use(bodyParser.json());

// GET ROUTES

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la requête vers la base de données', error);
    res.status(500).json({ erreur: 'Erreur lors de la requête vers la base de données' });
  }
});

// POST ROUTES

// Inscription
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Enregistrez l'utilisateur dans la base de données
    const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
    console.log('User registered successfully');
    res.json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ error: 'L\'inscription a échoué' });
  }
});

// Connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Générez un token JWT

  // Renvoie le token au client
  res.json({ message: 'Successful login', token: 'token' });
});

// Écoute du serveur
app.listen(port, () => {
  console.log(`Backend API en écoute sur le port ${port}`);
});
