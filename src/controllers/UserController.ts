// Model
import { UserModel } from "../models/User";
// Module
import { CrudModule } from "../modules/CrudModule";

export const createUser = CrudModule("create", UserModel);
export const getAllUsers = CrudModule("get", UserModel);
export const findUSerById = CrudModule("getById", UserModel, "user_Id");
export const removeUser = CrudModule("delete", UserModel, "user_Id");
export const updateUser = CrudModule("update", UserModel, "user_Id");
