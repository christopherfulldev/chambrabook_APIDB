require("dotenv").config();
require("./Config/db.config"); //porque IIFE é autoexecutada

const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan')
const cors = require("cors");
const authMiddleware = require("./Middlewares/auth.middleware");

const userRoutes = require("./Routes/User");
const friendRoutes = require("./Routes/Friend");
const matchRoutes = require("./Routes/Friend");
const albumRoutes = require("./Routes/Album");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(userRoutes);
app.use(authMiddleware);
app.use(friendRoutes);
app.use(matchRoutes);
app.use(albumRoutes);


app.listen(process.env.PORT, () => {
});
