const express = require('express');
const cors = require('cors');

const app = express(); //cerebro de la API

// Middleware
app.use(cors()); //Permite que Angular pueda consumir nuestra API.
app.use(express.json());//Permite recibir datos en formato JSON.

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: '🚀 Bienvenido a la API de MZ Tech Store'
    });
});

module.exports = app;