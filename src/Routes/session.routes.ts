import { Router } from "express";
import { SessionController } from "../controllers/SessionController";
import { validate } from "../middlewares/validationMiddleware";

const SessionRoutes = Router();

export default SessionRoutes.post("/session/", validate, SessionController);
