const productosService = require('../services/productos.service');

const obtenerProductos = async (req, res) => {

    try {

        const productos = await productosService.obtenerProductos();

        res.status(200).json(productos);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: 'Error al obtener los productos'
        });

    }

};

module.exports = {
    obtenerProductos
};