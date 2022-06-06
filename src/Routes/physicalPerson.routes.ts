import { Router } from "express";
import { PhysicalPerson } from "../controllers/PhysicalPersonController";
import { validate } from "../middlewares/validationMiddleware";

const physicalPerson = Router();

export default physicalPerson.get("/physicalperson/", validate, PhysicalPerson);
