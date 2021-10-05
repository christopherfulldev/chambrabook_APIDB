require("dotenv").config();
require("./Config/db.config"); //porque IIFE é autoexecutada

const express = require("express");
const app = express();

app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`Server listen on Port ${process.env.PORT}`)
});
