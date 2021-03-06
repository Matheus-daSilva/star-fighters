import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv"
import cors from "cors";
import chalk from "chalk";
import { errorHandler } from "./middlewares/errorHandlerMiddleware.js";
import router from "./routes/router.js";
dotenv.config()

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const port = +process.env.PORT || 4000;
app.listen(port, () => console.log(chalk.green.bold(`The server ir running on port ${port}`)))