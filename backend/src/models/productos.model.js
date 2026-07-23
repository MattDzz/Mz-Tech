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

module.exports = {
    obtenerProductos
};