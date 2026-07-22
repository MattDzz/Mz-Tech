const express = require('express');
const cors = require('cors');

const routes = require('./routes/index.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensaje: '🚀 Bienvenido a la API de MZ Tech Store'
    });
});

// API v1
app.use('/api/v1', routes);

module.exports = app;