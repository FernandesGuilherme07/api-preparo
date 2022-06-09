import { Router } from "express";
import {
  createUser,
  findUSerById,
  getAllUsers,
  removeUser,
  updateUser,
} from "../controllers/UserController";
import checkToken from "../middlewares/auth/authMiddleware";
import UserIdIsValid from "../middlewares/user/userIdIsValidMiddleware";
import { UserValidation } from "../middlewares/user/userValidatorMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const UserRoutes = Router();

export default UserRoutes.post("/user", UserValidation(), validate, createUser)
  .get("/users", validate, getAllUsers)
  .get("/user/:user_Id", UserIdIsValid, validate, findUSerById)
  .put(
    "/user/:user_Id",
    UserIdIsValid,
    checkToken,
    UserValidation(),
    validate,
    updateUser
  )
  .delete("/user/:user_Id", UserIdIsValid, checkToken, validate, removeUser);
