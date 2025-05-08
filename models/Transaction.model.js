// Importación de mongoose
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Fecha por defecto es la fecha actual
    },
    type: {
        type: String,
        required: true,
        enum: ['ingreso', 'egreso'], // Solo se permiten estos dos valores
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Obtenemos el ID del usuario
        ref: 'User', // Referencia al modelo de usuario
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // Obtenemos el ID de la categoría
        ref: 'Category', // Referencia al modelo de categoría
        required: true
    }
});

// Exporta el modelo de transacción
model.exports = mongoose.model('Transaction', transactionSchema); 