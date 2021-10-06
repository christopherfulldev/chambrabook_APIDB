require("dotenv").config();
require("./Config/db.config"); //porque IIFE é autoexecutada

const express = require("express");
const app = express();
const userRoutes = require("./Routes/User");
const albumRoutes = require("./Routes/Album");
const friendRoutes =require("./Routes/Friend");
const matchRoutes = require("./Routes/Match");

app.use(express.json());
app.use(userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listen on Port ${process.env.PORT}`)
});
