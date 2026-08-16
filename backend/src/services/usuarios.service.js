//Validacion de datos de usuario
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

    const result = await usuariosModel.agregarUsuario(usuario);

    return {
        id: result.insertId
    };

};