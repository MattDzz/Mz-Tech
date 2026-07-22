const pool = require('../config/database');

const obtenerProductos = async () => {

    const [rows] = await pool.query(`
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
        ORDER BY p.nombre ASC
    `);

    return rows;
};

module.exports = {
    obtenerProductos
};