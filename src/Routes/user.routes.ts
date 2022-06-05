import { Router } from "express";
import {
  createUser,
  findUSerById,
  getAllUsers,
  removeUser,
  updateUser,
} from "../controllers/UserController";
import { UserValidation } from "../middlewares/userValidatorMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const UserRoutes = Router();

export default UserRoutes.post("/user", UserValidation(), validate, createUser)
  .get("/users", validate, getAllUsers)
  .get("/user/:id", validate, findUSerById)
  .put("/user/:id", UserValidation(), validate, updateUser)
  .delete("/user/:id", validate, removeUser);
