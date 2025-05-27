const express = require("express");
const handleError = require("./middlewares/error.middleware");
const CategoryRoutes = require("./routes/category.routes");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

//Cargar express
const app = express();

//Cargar middlewares
app.use(express.json());
app.use(cors());
app.use(handleError);

//Cargar rutas
app.use("/user", userRoutes);
app.use("/category", CategoryRoutes);

//Cargar la base de datos
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Base de datos conectada :3");
        app.listen(process.env.PORT || 3000, () => {
            console.log("Servidor corriendo en el puerto " + process.env.PORT);
        });
    })
    .catch((error) => {
        console.error(error || "No se pudo conectar a la base de datos :c </3");
    });
