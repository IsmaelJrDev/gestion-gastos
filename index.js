const express = require("express");
const handleError = require("./middlewares/error.middleware");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

//Cargar middlewares
app.use(express.json());
app.use(cors());
app.use(handleError);

app.use("/user", userRoutes);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Base de datos conectada :3");
        app.listen(process.env.PORT || 3000, () => {
            console.log(
                "Servidor corriendo en el puerto ",
                process.env.PORT || 3000
            );
        });
    })
    .catch((error) => {
        console.error(error || "No se pudo conectar a la base de datos :c </3");
    });
