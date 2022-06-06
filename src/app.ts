import express from "express";
import userRoutes from "./Routes/user.routes";
import "dotenv/config";
import morganMiddleware from "./middlewares/morganMiddleware";
import resumeRoutes from "./Routes/resume.routes";
const { APP_VERSION } = process.env;

const app = express();

app.use(express.json());
app.use(`${APP_VERSION}`, userRoutes);
app.use(`${APP_VERSION}`, resumeRoutes);
app.use(morganMiddleware);

export default app;
