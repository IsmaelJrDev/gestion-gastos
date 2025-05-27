// File: Indica como crear nuestras rutas o endpoints

const router = require("express").Router();
const CategoryController = require("../controllers/category.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// middlewares global para category
router.use(authMiddleware);

router.get("/", CategoryController.gettAll);
router.post("/", CategoryController.create);

// Exportamos el router
module.exports = router;
