const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    //headers :{"authorization":"Bearer eyJhbg"}
    // req.headers.authorization.split(" ")
    // ["Bearer", "eyJhbg"][1]
    if (!req.headers.authorization)
        return res.status(401).json({ message: "Token no ingresado" });

    const token = req.headers.authorization.split(" ")[1];
    if (!token)
        return res.status(401).json({
            message: "Token No proporcionado",
        });
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "token invalido" });
    }
};
