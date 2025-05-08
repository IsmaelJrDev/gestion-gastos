// En caso de error, se envía un mensaje al cliente y se registra el error en la consola

module.export = (err, req, res, next) => {
    console.error(err); // Mostrar el error en la consola
    res.status(500).json({
        message: err.message || "Error interno del servidor"
    })
}