const productosModel = require('../models/productos.model');

const obtenerProductos = async () => {

    return await productosModel.obtenerProductos();

};

module.exports = {
    obtenerProductos
};
//aquí es donde pondremos validaciones, filtros, descuentos y reglas de negocio.