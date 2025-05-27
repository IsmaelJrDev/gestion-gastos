const CategoryService = require("../service/category.service");

module.exports.create = async (req, res, next) => {
    const { name } = req.body;
    const id = req.user._id;

    try {
        const category = await CategoryService.create(name, id);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

module.exports.gettAll = async (req, res, next) => {
    const id = req.user._id; // Assuming req.user._id is the user ID
    try {
        const categories = await CategoryService.getAll(id);
        res.json(categories);
        res.json();
    } catch (error) {
        next(error);
    }
};
