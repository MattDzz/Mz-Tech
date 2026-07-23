const productosService = require('../services/productos.service');

const obtenerProductos = async (req, res) => {

    try {

        const filtros = req.query;

        const productos = await productosService.obtenerProductos(filtros);

        res.status(200).json({
            success: true,
            message: "Productos obtenidos correctamente",
            data: productos
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener los productos"
        });

    }

};

module.exports = {
    obtenerProductos
};