const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'mysql',
  user: 'udocker',
  password: 'dockerpassword',
  database: 'dockerdata',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/', (req, res) => {
  db.query('SELECT * FROM your_table_name', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


