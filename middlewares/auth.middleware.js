// Importacion de jwt y dotenv
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    // Obtener el token del header
    // header: {"authorization":"Bearer eyJhbGci0i..."}
    // req.headers.authorization.split(" ")["Bearer", "eyJhbGci0i..."]

    const token = req.headers.authorization.split(" ")[1]; // Obtener el token

    // Si no hay token, devolver 401
    if (!token) return res.status(401).json({
        message: "Token no proporcionado"
    })

    // Si hay token, verificarlo si es valido
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY); // Verificar el token
        req.user = decoded; // Guardar el token decodificado en el request
        next(); // Continuar con la siguiente funcion
    } catch (err) {
        // Si el token no es valido, devolver 401
        return res.status(401).json({
            message: "Token no valido"
        })
    }
}