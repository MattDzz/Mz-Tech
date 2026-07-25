//aquí es donde pondremos validaciones, filtros, descuentos y reglas de negocio.
const productosModel = require('../models/productos.model');

const obtenerProductos = async (filtros) => {

    return await productosModel.obtenerProductos(filtros);

};

module.exports = {
    obtenerProductos
};

const productosModel = require('../models/productos.model');


//Agregar un producto
const agregarProducto = async (producto) => {

    // Validaciones
if (!producto.nombre || producto.nombre.trim() === "") {
    throw new Error("El nombre es obligatorio");
}
}
if (producto.precio <= 0) {
    throw new Error("El precio debe ser mayor a 0");
}
if (producto.stock < 0) {
    throw new Error("El stock no puede ser negativo");
}
if (!producto.categoria_id) {
    throw new Error("La categoría es obligatoria");
}

if (!producto.marca_id) {
    throw new Error("La marca es obligatoria");
}
return await productosModel.agregarProducto(producto);


module.exports = {
    obtenerProductos,
    agregarProducto
};
