//models habla con la base de datos, servicios habla con los modelos y controladores hablan con los servicios.
const pool = require('../config/database');

const obtenerProductos = async (filtros) => {

    let sql = `
        SELECT
            p.id,
            p.nombre,
            p.descripcion,
            p.precio,
            p.stock,
            p.imagen,
            p.destacado,
            p.fecha_creacion,
            c.nombre AS categoria,
            m.nombre AS marca
        FROM productos p
        INNER JOIN categorias c
            ON p.categoria_id = c.id
        INNER JOIN marcas m
            ON p.marca_id = m.id
        WHERE p.estado = 1
    `;

    const valores = [];

    if (filtros.buscar) {
        sql += " AND p.nombre LIKE ?";
        valores.push(`%${filtros.buscar}%`);
    }

    if (filtros.categoria) {
        sql += " AND p.categoria_id = ?";
        valores.push(filtros.categoria);
    }

    if (filtros.marca) {
        sql += " AND p.marca_id = ?";
        valores.push(filtros.marca);
    }

    if (filtros.stock === "true") {
        sql += " AND p.stock > 0";
    }

    if (filtros.destacado === "true") {
        sql += " AND p.destacado = 1";
    }

    sql += " ORDER BY p.nombre ASC";

    const [rows] = await pool.query(sql, valores);

    return rows;

};

const crearproducto = async (producto) =>
{
    const { nombre, descripcion, precio, stock, imagen, categoria_id, marca_id, destacado } = producto;
    const [result] = await pool.query(
        'INSERT INTO productos (nombre, descripcion, precio, stock, imagen, categoria_id, marca_id, destacado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, descripcion, precio, stock, imagen, categoria_id, marca_id, destacado]
    );
    return result;
}

const agregarProducto = async (producto) => {
    try {
        const result = await crearproducto(producto);
        return { success: true, message: 'Producto agregado correctamente', id: result.insertId };

    } catch (error) {
        console.error('Error al agregar el producto:', error);
        return { success: false, message: 'Error al agregar el producto' };
    }
};

const actualizarProducto = async (id, producto) => {
    const { nombre, descripcion, precio, stock, imagen, categoria_id, marca_id, destacado } = producto;
    const [result] = await pool.query( 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, imagen = ?, categoria_id = ?, marca_id = ?, destacado = ? WHERE id = ?', [nombre, descripcion, precio, stock, imagen, categoria_id, marca_id, destacado, id] );
    return result.affectedRows > 0;
}


module.exports = {
    obtenerProductos,
    actualizarProducto,
    agregarProducto
};
