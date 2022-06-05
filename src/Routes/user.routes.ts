import { Router } from "express";
import {
  createUser,
  findUSerById,
  getAllUsers,
  removeUser,
  updateUser,
} from "../controllers/UserController";

const UserRoutes = Router();

export default UserRoutes.get("/users", getAllUsers)
  .get("/user/:id", findUSerById)
  .post("/user", createUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", removeUser);
