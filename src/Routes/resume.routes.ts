import { Router } from "express";
import {
  createResume,
  findResumeById,
  getAllResumes,
  removeResume,
  updateResume,
} from "../controllers/ResumeController";
import checkToken from "../middlewares/auth/authMiddleware";
import ResumeExists from "../middlewares/resume/resumeExistsMiddleware";
import { ResumeValidation } from "../middlewares/resume/resumeValidatorMiddleware";
import UserIdIsValid from "../middlewares/user/userIdIsValidMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const ResumeRoutes = Router();

export default ResumeRoutes.post(
  "/user/:user_Id/resume/",
  UserIdIsValid,
  ResumeValidation(),
  checkToken,
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
    checkToken,
    validate,
    updateResume
  )
  .delete(
    "/user/:user_Id/resume/:resume_Id",
    UserIdIsValid,
    ResumeExists,
    checkToken,
    validate,
    removeResume
  );
