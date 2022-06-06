import { Router } from "express";
import {
  createOpportunitie,
  findOpportunitieById,
  getAllOpportunitie,
  removeOpportunitie,
  updateOpportunitie,
} from "../controllers/OpportunitiesController";
import { OppornutiesValidation } from "../middlewares/opportunitiesValidatorMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const OpportunitiesRoutes = Router();

export default OpportunitiesRoutes.post(
  "/user/:user_id/Opportunitie/",
  OppornutiesValidation(),
  validate,
  createOpportunitie
)
  .get("/user/:user_Id/Opportunitie/", validate, getAllOpportunitie)
  .get("/user/:user_Id/Opportunitie/:id", validate, findOpportunitieById)
  .put(
    "/user/:user_Id/Opportunitie/:id",
    OppornutiesValidation(),
    validate,
    updateOpportunitie
  )
  .delete("/user/:user_Id/Opportunitie/:id", validate, removeOpportunitie);
