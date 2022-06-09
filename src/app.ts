import express from "express";
import "dotenv/config";
// routes aplication
import userRoutes from "./Routes/user.routes";
import resumeRoutes from "./Routes/resume.routes";
import opportunitiesRoutes from "./Routes/opportunities.routes";
import companiesRoutes from "./Routes/companies.routes";
import physicalPersonRoutes from "./Routes/physicalPerson.routes";
import candidacyRoutes from "./Routes/candidacy.routes";
import sessionRoutes from "./Routes/session.routes";

import morganMiddleware from "./middlewares/morganMiddleware";

const { APP_VERSION } = process.env;

const app = express();
app.use(express.json());
app.use(`${APP_VERSION}`, userRoutes);
app.use(`${APP_VERSION}`, resumeRoutes);
app.use(`${APP_VERSION}`, opportunitiesRoutes);
app.use(`${APP_VERSION}`, physicalPersonRoutes);
app.use(`${APP_VERSION}`, companiesRoutes);
app.use(`${APP_VERSION}`, candidacyRoutes);
app.use(`${APP_VERSION}`, sessionRoutes);

app.use(morganMiddleware);

export default app;
