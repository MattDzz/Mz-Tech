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