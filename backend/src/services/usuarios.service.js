//Validacion de datos de usuario
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuariosModel = require('../models/usuarios.model');

const agregarUsuario = async (usuario) => {

    if (!usuario.nombre || usuario.nombre.trim() === "") {
        throw new Error("El nombre es obligatorio");
    }

    if (!usuario.apellido || usuario.apellido.trim() === "") {
        throw new Error("El apellido es obligatorio");
    }

    if (!usuario.correo || usuario.correo.trim() === "") {
        throw new Error("El correo es obligatorio");
    }

    if (!usuario.password || usuario.password.trim() === "") {
        throw new Error("La contraseña es obligatoria");
    }

    if (!usuario.rol) {
        throw new Error("El rol es obligatorio");
    }

    const passwordHash = await bcrypt.hash(usuario.password, 10);

    const usuarioConPassword = {
        ...usuario,
        password: passwordHash
    };

    const result = await usuariosModel.agregarUsuario(usuarioConPassword);

    return {
        id: result.insertId
    };
};

const login = async (correo, password) => {

    const usuario = await usuariosModel.buscarUsuarioPorCorreo(correo);

    if (!usuario) {
        throw new Error("Correo o contraseña incorrectos");
    }

    const passwordCorrecta = await bcrypt.compare(
        password,
        usuario.password
    );

    if (!passwordCorrecta) {
        throw new Error("Correo o contraseña incorrectos");
    }

    const token = jwt.sign(
    {
        id: usuario.id,
        rol: usuario.rol
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '8h'
    }
);

    return {
        token,
        usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        rol: usuario.rol
        }
    };
};

module.exports = {
    agregarUsuario,
    login
};