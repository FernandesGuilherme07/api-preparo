import { Router } from "express";
import {
  createResume,
  findResumeById,
  getAllResume,
  removeResume,
  updateResume,
} from "../controllers/ResumeController";
import ResumeExists from "../middlewares/resumeExistsMiddleware";
import { ResumeValidation } from "../middlewares/resumeValidatorMiddleware";
import UserIdIsValid from "../middlewares/userIdIsValidMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const ResumeRoutes = Router();

export default ResumeRoutes.post(
  "/user/:user_id/resume/",
  UserIdIsValid,
  ResumeValidation(),
  validate,
  createResume
)
  .get("/user/:user_Id/resume/", UserIdIsValid, validate, getAllResume)
  .get(
    "/user/:user_Id/resume/:id",
    UserIdIsValid,
    ResumeExists,
    validate,
    findResumeById
  )
  .put(
    "/user/:user_Id/resume/:id",
    UserIdIsValid,
    ResumeExists,
    ResumeValidation(),
    validate,
    updateResume
  )
  .delete(
    "/user/:user_Id/resume/:id",
    UserIdIsValid,
    ResumeExists,
    validate,
    removeResume
  );
