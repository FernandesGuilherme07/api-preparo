import { Router } from "express";
import {
  createOpportunitie,
  findOpportunitieById,
  getAllOpportunitie,
  getAllOpportunitieByUserId,
  removeOpportunitie,
  updateOpportunitie,
} from "../controllers/OpportunitiesController";
import OpportunitiesExists from "../middlewares/opportunitiesExistsMiddleware";
import { OppornutiesValidation } from "../middlewares/opportunitiesValidatorMiddleware";
import UserIdIsValid from "../middlewares/userIdIsValidMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const OpportunitiesRoutes = Router();

export default OpportunitiesRoutes.post(
  "/user/:user_id/opportunitie/",
  UserIdIsValid,
  OppornutiesValidation(),
  validate,
  createOpportunitie
)
  .get(
    "/user/:user_Id/opportunitie/",
    UserIdIsValid,
    validate,
    getAllOpportunitie
  )
  .get(
    "/user/:user_Id/opportunitieUserId/",
    UserIdIsValid,
    validate,
    getAllOpportunitieByUserId
  )
  .get(
    "/user/:user_Id/opportunitie/:id",
    UserIdIsValid,
    OpportunitiesExists,
    validate,
    findOpportunitieById
  )
  .put(
    "/user/:user_Id/opportunitie/:id",
    UserIdIsValid,
    OppornutiesValidation(),
    OpportunitiesExists,
    validate,
    updateOpportunitie
  )
  .delete(
    "/user/:user_Id/opportunitie/:id",
    UserIdIsValid,
    OpportunitiesExists,
    validate,
    removeOpportunitie
  );
