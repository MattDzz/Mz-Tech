const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productos.controller');

router.get('/', productosController.obtenerProductos);

router.post('/', productosController.agregarProducto);

router.put('/:id', productosController.actualizarProducto);

router.delete('/:id', productosController.eliminarProducto);

router.patch('/:id/stock', productosController.actualizarStock);

module.exports = router;