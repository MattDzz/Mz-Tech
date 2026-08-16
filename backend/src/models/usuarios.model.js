const pool = require('../config/database');


const agregarUsuario = async (usuario) => {

    const {
        nombre,
        apellido,
        correo,
        password,
        telefono,
        rol
    } = usuario;

    const [result] = await pool.query(
        `INSERT INTO usuarios
        (nombre, apellido, correo, password, telefono, rol)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            nombre,
            apellido,
            correo,
            password,
            telefono,
            rol
        ]
    );

    return result;

};

const buscarUsuarioPorCorreo = async (correo) => {
    const [rows] = await pool.query(
        `SELECT * FROM usuarios WHERE correo = ? AND estado = 1`,
        [correo]
    );

    return rows[0];
};



module.exports = {
    agregarUsuario,
    buscarUsuarioPorCorreo
};