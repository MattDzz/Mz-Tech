// controllers hablan con los servicios y servicios hablan con los modelos.
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

const agregarProducto = async (req, res) => {

    try {

        const producto = req.body;

        const nuevoProducto = await productosService.agregarProducto(producto);

        res.status(201).json({
            success: true,
            message: "Producto agregado correctamente",
            data: nuevoProducto
        });

    } catch (error) {

        console.error(error);

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};

const actualizarProducto = async (req, res) => {

    try {

        const { id } = req.params;
        const producto = req.body;

        const resultado = await productosService.actualizarProducto(id, producto);

        res.status(200).json({
            success: true,
            message: "Producto actualizado correctamente",
            data: resultado
        });

    } catch (error) {

        console.error(error);

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};



module.exports = {
    obtenerProductos,
    agregarProducto,
    actualizarProducto  
};