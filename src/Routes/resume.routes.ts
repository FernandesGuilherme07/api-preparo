import { Router } from "express";
import {
  createResume,
  findResumeById,
  getAllResume,
  removeResume,
  updateResume,
} from "../controllers/ResumeController";
import { ResumeValidation } from "../middlewares/resumeValidatorMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const ResumeRoutes = Router();

export default ResumeRoutes.post(
  "/user/:user_id/resume/",
  ResumeValidation(),
  validate,
  createResume
)
  .get("/user/:user_Id/resume/", validate, getAllResume)
  .get("/user/:user_Id/resume/:id", validate, findResumeById)
  .put("/user/:user_Id/resume/:id", ResumeValidation(), validate, updateResume)
  .delete("/user/:user_Id/resume/:id", validate, removeResume);
