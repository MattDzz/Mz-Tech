const productosModel = require('../models/productos.model');

const obtenerProductos = async (filtros) => {

    return await productosModel.obtenerProductos(filtros);

};

// Agregar un producto
const agregarProducto = async (producto) => {

    // Validaciones
    if (!producto.nombre || producto.nombre.trim() === "") {
        throw new Error("El nombre es obligatorio");
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

};

const actualizarProducto = async (id, producto) => {
    // Validaciones
    if (!producto.nombre || producto.nombre.trim() === "") {
        throw new Error("El nombre es obligatorio");
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

    const resultado = await productosModel.actualizarProducto(id, producto);

if (resultado.affectedRows === 0) {
    throw new Error("Producto no encontrado");
}

return resultado;
}

module.exports = {
    obtenerProductos,
    agregarProducto,
    actualizarProducto
};