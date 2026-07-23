const productosModel = require('../models/productos.model');

const obtenerProductos = async (filtros) => {

    return await productosModel.obtenerProductos(filtros);

};

module.exports = {
    obtenerProductos
};
//aquí es donde pondremos validaciones, filtros, descuentos y reglas de negocio.