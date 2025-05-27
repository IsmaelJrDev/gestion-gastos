const routes = require("express").Router();
const TransactionController = require("../controllers/transaction.controller");
const authMiddleware = require("../middlewares/auth.middleware");

routes.use(authMiddleware);

routes.get("/", TransactionController.getAll);
routes.get("/category/:category", TransactionController.getByCategoryId);
routes.get("/date/:date", TransactionController.getByDate);
routes.get("/income", TransactionController.getIncome);
routes.get("/outflow/:outflow", TransactionController.getOutflow);

routes.post("/", TransactionController.create);

module.exports = routes;
