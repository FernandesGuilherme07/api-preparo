import express from "express";
import userRoutes from "./Routes/user.routes";
import "dotenv/config";
import morganMiddleware from "./middlewares/morganMiddleware";

const { APP_VERSION } = process.env;

const app = express();

app.use(express.json());
app.use(`${APP_VERSION}`, userRoutes);
app.use(morganMiddleware);

export default app;
