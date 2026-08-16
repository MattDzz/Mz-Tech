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
