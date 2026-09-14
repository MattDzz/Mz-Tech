const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios.controller');



router.post('/', usuariosController.agregarUsuario);

router.post('/login', usuariosController.login);

module.exports = router;