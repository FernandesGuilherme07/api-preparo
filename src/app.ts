import express from "express";
import router from "./routes";
import "dotenv/config";
import morganMiddleware from "./middlewares/morganMiddleware";

const { APP_VERSION } = process.env;

const app = express();

app.use(express.json());
app.use(`${APP_VERSION}`, router);
app.use(morganMiddleware);

export default app;
