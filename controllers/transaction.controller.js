const TransactionService = require("../services/transaction.service");

// Funcion para crear una transacción
module.exports.create = async (req, res, next) => {
    const id = req.user._id;
    const data = req.body;
    try {
        const transaction = await TransactionService.create(id, data);
        res.status(201).json(transaction);
    } catch (error) {
        next(error);
    }
};

// funcion para actualizar una transacción
module.exports.getAll = async (req, res, next) => {
    const id = req.user._id;
    try {
        const transactions = await TransactionService.getAll(id);
        res.status(200).json(transactions);
    } catch (error) {
        next(error);
    }
};

module.exports.getByDate = async (req, res, next) => {
    const id = req.user._id;
    const date = req.body.date;
    try {
        const fechas = await TransactionService.getByDate(id, date);
        res.json(fechas);
    } catch (error) {
        next(error);
    }
};

module.exports.getByCategoryId = async (req, res, next) => {
    const id = req.user._id;
    const categoryId = req.body.category;
    try {
        const categorias = await TransactionService.getByCategoryId(
            id,
            categoryId
        );
        res.json(categorias);
    } catch (error) {
        next(error);
    }
};

// funcion para eliminar una transacción
module.exports.getIncome = async (req, res, next) => {
    const id = req.user._id;
    const date = req.body;
    try {
        const ingresos = await TransactionService.getIncome(id);
        res.json(ingreso);
    } catch (error) {
        next(error);
    }
};

module.exports.getOutflow = async (req, res, next) => {
    const id = req.user._id;
    const date = req.body;
    try {
        const egresos = await TransactionService.getOutflow(id);
        res.json(egreso);
    } catch (error) {
        next(error);
    }
};
