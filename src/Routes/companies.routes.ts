import { Router } from "express";
import { getAllcompanies } from "../controllers/CompaniesController";
import { validate } from "../middlewares/validationMiddleware";

const CompaniesRoutes = Router();

export default CompaniesRoutes.get("/companies/", validate, getAllcompanies);
