const express = require('express');

const PORT = 2727;
const HOST = 'localhost';

const app = express();

app.get('/', (req, res) => {
  res.send('Esto es una pequeña prueba para asegurarnos que Node y Express funcionan\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
