const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'db',       // IMPORTANT (docker service name)
  user: 'root',
  password: 'root',
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL ✅");
  }
});

app.get('/', (req, res) => {
  res.send("Backend Running 🚀");
});

app.get('/data', (req, res) => {
  db.query('SELECT NOW() as time', (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
