import { Router } from "express";
import {
  createOpportunitie,
  findOpportunitieById,
  getAllOpportunitie,
  getAllOpportunitieByUserId,
  removeOpportunitie,
  updateOpportunitie,
} from "../controllers/OpportunitiesController";
import checkToken from "../middlewares/auth/authMiddleware";
import OpportunitiesIdIdValid from "../middlewares/opportunities/opportunitiesIdIsValidMiddleware";
import { OppornutiesValidation } from "../middlewares/opportunities/opportunitiesValidatorMiddleware";
import UserIdIsValid from "../middlewares/user/userIdIsValidMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const OpportunitiesRoutes = Router();

export default OpportunitiesRoutes.post(
  "/user/:user_Id/opportunitie/",
  UserIdIsValid,
  OppornutiesValidation(),
  checkToken,
  validate,
  createOpportunitie
)
  .get("/allopportunities/", validate, getAllOpportunitie)
  .get(
    "/user/:user_Id/opportunities/",
    UserIdIsValid,
    validate,
    getAllOpportunitieByUserId
  )
  .get(
    "/user/:user_Id/opportunitie/:opportunitie_Id",
    UserIdIsValid,
    OpportunitiesIdIdValid,
    validate,
    findOpportunitieById
  )
  .put(
    "/user/:user_Id/opportunitie/:opportunitie_Id",
    UserIdIsValid,
    OppornutiesValidation(),
    OpportunitiesIdIdValid,
    checkToken,
    validate,
    updateOpportunitie
  )
  .delete(
    "/user/:user_Id/opportunitie/:opportunitie_Id",
    UserIdIsValid,
    OpportunitiesIdIdValid,
    checkToken,
    validate,
    removeOpportunitie
  );
