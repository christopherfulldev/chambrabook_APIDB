require("dotenv").config();
require("./Config/db.config"); //porque IIFE é autoexecutada

const express = require("express");

const authMiddleware = require("./Middlewares/auth.middleware");

const userRoutes = require("./Routes/User");
const friendRoutes = require("./Routes/Friend");
const matchRoutes = require("./Routes/Friend");
const albumRoutes = require("./Routes/Album");


const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(friendRoutes);
app.use(matchRoutes);
app.use(albumRoutes);
app.use(authMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server listen on Port ${process.env.PORT}`)
});
