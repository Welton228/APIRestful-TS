// ENV variables
require("dotenv").config();

// import dependecias
import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// DB
import db from "../config/db";

// Routes
import router from "./router";

// Logger
import Logger from "../config/logger";

// Morgan middleware
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);

app.use('/api/', router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    
    Logger.info(`Server is running on port ${port}`);
})