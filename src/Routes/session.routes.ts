import { Router } from "express";
import { SessionController } from "../controllers/SessionController";
import { AuthValidator } from "../middlewares/auth/authValidator";
import { validate } from "../middlewares/validationMiddleware";

const SessionRoutes = Router();

export default SessionRoutes.post(
  "/session/",
  AuthValidator(),
  validate,
  SessionController
);
