const express = require('express');
const router = express.Router();

const productosRoutes = require('./productos.routes');
const usuariosRoutes = require('./usuarios.routes');
const authRoutes = require('./auth.routes');

router.use('/productos', productosRoutes);
router.use('/usuarios', usuariosRoutes);
router.use('/auth', authRoutes);

module.exports = router;