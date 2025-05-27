const TransactionModel = require("../models/Transaction.model");

exports.getAll = async (userId) => {
    return await TransactionModel.find({ user: userId });
};
exports.getByCategoryId = async (userId, categoryId) => {
    return await TransactionModel.find({ user: userId, category: categoryId });
};
exports.getByData = async (date, userId) => {
    return await TransactionModel.find({ user: userId, date: date });
};
exports.getByIncome = async (userId) => {
    return await TransactionModel.find({ user: userId, type: "ingreso" });
};
exports.getOutflow = async (userId) => {
    return await TransactionModel.find({ user: userId, type: "egreso" });
};
exports.create = async (data, userId) => {
    const transaction = new TransactionModel({
        ...data,
        user: userId,
    });
    return await transaction.save();
};
