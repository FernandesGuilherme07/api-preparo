import { Router } from "express";
import * as TestController from "./controllers/TestController";

const router = Router();

export default router.get("/teste", TestController.index);
