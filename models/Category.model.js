// Importación de mongoose
const mongoose = require('mongoose');

// Definición del esquema de la categoría
const categorySchema = new mongoose.Schema({
    // Nombre de la categoría
    name: {
        type: String,
        required: true,
    },
    // Descripción de la categoría
    user: {
        type: mongoose.Schema.Types.ObjectId, // Obtener el id del usuario
        ref: 'User', // Referencia al modelo de usuario
        required: true,
        index: true // Para crear un índice en el campo user
    }
});

// Exportación del modelo de categoría
module.exports = mongoose.model('Category', categorySchema);