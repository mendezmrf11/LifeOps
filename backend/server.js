const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    mensaje: 'Backend funcionando correctamente'
  });
});

app.listen(3000, () => {
  console.log('Servidor backend en puerto 3000');
});