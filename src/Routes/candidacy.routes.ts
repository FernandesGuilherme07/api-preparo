import { Router } from "express";
import {
  createCandidacy,
  findCandidacyById,
  getAllCandidacy,
} from "../controllers/CandidacyController";
import checkToken from "../middlewares/auth/authMiddleware";
import CandidacyIdIdValid from "../middlewares/candidacy/candidacyExistsMiddleware";
import { candidacyValidation } from "../middlewares/candidacy/candidacyValidatorMiddleware";
import opportunitiesIdIsValid from "../middlewares/opportunities/opportunitiesIdIsValidMiddleware";
import UserIdIsValid from "../middlewares/user/userIdIsValidMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const candidacyRoutes = Router();

export default candidacyRoutes
  .post(
    "/user/:user_Id/opportunitie/:opportunitie_Id/candidacy",
    UserIdIsValid,
    opportunitiesIdIsValid,
    candidacyValidation(),
    checkToken,
    validate,
    createCandidacy
  )
  .get(
    "/user/:user_Id/opportunitie/:opportunitie_id/candidacy",
    UserIdIsValid,
    opportunitiesIdIsValid,
    checkToken,
    validate,
    getAllCandidacy
  )
  .get(
    "/user/:user_Id/opportunitie/:opportunitie_id/candidacy/:candidacy_Id",
    UserIdIsValid,
    opportunitiesIdIsValid,
    CandidacyIdIdValid,
    checkToken,
    validate,
    findCandidacyById
  );
