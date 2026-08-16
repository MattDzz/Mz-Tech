const usuariosService = require('../services/usuarios.service');

const agregarUsuario = async (req, res) => {

    try {

        const nuevoUsuario = await usuariosService.agregarUsuario(req.body);

        res.status(201).json({
            success: true,
            message: "Usuario agregado correctamente",
            data: nuevoUsuario
        });

    } catch (error) {

        console.error(error);

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

const login = async (req, res) => {

    try {
        const { correo, password } = req.body;

        const usuario = await usuariosService.login(correo, password);
        
        res.status(200).json({
            success: true,
            message: "Login exitoso",
            data: usuario
        });

    } catch (error) {

        console.error(error);

        res.status(401).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    agregarUsuario,
    login
};