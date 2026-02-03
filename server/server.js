const express = require('express');
const cors = require('cors');
const mysql = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// REGISTRAZIONE
app.post('/register', (req, res) => {
  const { nome, email, password } = req.body;
  const sql = "INSERT INTO utenti (nome, email, password) VALUES (?, ?, ?)";
  mysql.query(sql, [nome, email, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send("Utente registrato");
  });
});

// LOGIN
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM utenti WHERE email = ? AND password = ?";
  mysql.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) res.status(200).send(result[0]);
    else res.status(401).send("Credenziali errate");
  });
});

// PRENOTAZIONE
app.post('/prenota', (req, res) => {
  const { utente_id, data_lezione, ora_lezione } = req.body;
  const sql = "INSERT INTO prenotazioni (utente_id, data_lezione, ora_lezione) VALUES (?, ?, ?)";
  mysql.query(sql, [utente_id, data_lezione, ora_lezione], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send("Prenotata!");
  });
});

// RECUPERO PRENOTAZIONI
app.get('/le-mie-prenotazioni/:id', (req, res) => {
  const utente_id = req.params.id;
  const sql = "SELECT * FROM prenotazioni WHERE utente_id = ? ORDER BY data_lezione ASC, ora_lezione ASC";
  mysql.query(sql, [utente_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(result);
  });
});

// CANCELLAZIONE PRENOTAZIONE (Nuova!)
app.delete('/cancella-prenotazione/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM prenotazioni WHERE id = ?";
  mysql.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send("Eliminata!");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server acceso sulla porta ${PORT}`));