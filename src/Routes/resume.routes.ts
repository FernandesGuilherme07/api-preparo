import { Router } from "express";
import {
  createResume,
  findResumeById,
  getAllResumes,
  removeResume,
  updateResume,
} from "../controllers/ResumeController";
import ResumeExists from "../middlewares/resume/resumeExistsMiddleware";
import { ResumeValidation } from "../middlewares/resume/resumeValidatorMiddleware";
import UserIdIsValid from "../middlewares/user/userIdIsValidMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const ResumeRoutes = Router();

export default ResumeRoutes.post(
  "/user/:user_Id/resume/",
  UserIdIsValid,
  ResumeValidation(),
  validate,
  createResume
)
  .get("/user/:user_Id/resume/", UserIdIsValid, validate, getAllResumes)
  .get(
    "/user/:user_Id/resume/:resume_Id",
    UserIdIsValid,
    ResumeExists,
    validate,
    findResumeById
  )
  .put(
    "/user/:user_Id/resume/:resume_Id",
    UserIdIsValid,
    ResumeExists,
    ResumeValidation(),
    validate,
    updateResume
  )
  .delete(
    "/user/:user_Id/resume/:resume_Id",
    UserIdIsValid,
    ResumeExists,
    validate,
    removeResume
  );
