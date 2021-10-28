require("dotenv").config();
require("./Config/db.config"); //porque IIFE é autoexecutada

const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan')
const cors = require("cors");
const authMiddleware = require("./Middlewares/auth.middleware");

const albumRoutes = require("./Routes/Album");
const conversationRoutes = require("./Routes/Conversation");
const friendRoutes = require("./Routes/Friend");
const matchRoutes = require("./Routes/Match");
const messagesRoutes = require("./Routes/Messages");
const postRoutes = require("./Routes/Post");
const userRoutes = require("./Routes/User");

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

app.use((req, res, next) => {res.sendFile(__dirname + "/public/index.html");});

app.listen(process.env.PORT, () => {
});
