import express from "express";
import "dotenv/config";

import morganMiddleware from "./middlewares/morganMiddleware";
// routes aplication
import userRoutes from "./Routes/user.routes";
import resumeRoutes from "./Routes/resume.routes";
import opportunitiesRoutes from "./Routes/opportunities.routes";
import companiesRoutes from "./Routes/companies.routes";
import physicalPersonRoutes from "./Routes/physicalPerson.routes";

const { APP_VERSION } = process.env;

const app = express();
app.use(express.json());
app.use(`${APP_VERSION}`, userRoutes);
app.use(`${APP_VERSION}`, resumeRoutes);
app.use(`${APP_VERSION}`, opportunitiesRoutes);
app.use(`${APP_VERSION}`, physicalPersonRoutes);
app.use(`${APP_VERSION}`, companiesRoutes);

app.use(morganMiddleware);

export default app;
