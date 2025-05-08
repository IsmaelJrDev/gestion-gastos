// Importación de mongoose y bcrypt
const mogoose = require("mogoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    // Definición del esquema de usuario
    email: {
        type: String, // Tipo de dato String
        required: true, // Campo requerido
        unique: true, // Asegura que el email sea único
        lowercase: true, // Convierte el email a minúsculas
        trim: true, // Elimina espacios en blanco al principio y al final
    },
    password: {}
})