// Importación de mongoose y bcrypt
const mongoose = require("mongoose");
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
    password: {
        type: String, // Tipo de dato String
        required: true, // Campo requerido
    }
});

// Método para encriptar la contraseña antes de guardarla
userSchema.pre("save", async () => {
    if (!this.isModified("password")) return next(); // Si la contraseña no ha sido modificada, continuar

    const salt = await bcrypt.genSalt(10); // Genera un salt con 10 rondas
    this.password = await bcrypt.hash(this.password, salt); // Encripta la contraseña
    next(); // Continúa con el siguiente middleware
});

// Método para comparar la contraseña ingresada con la encriptada
userSchema.methods.comparePassword = (password) => {
    return bcrypt.compare(password, this.password); // Compara la contraseña ingresada con la encriptada
}

// Exporta el modelo de usuario
module.exports = mongoose.model("User", userSchema); 
