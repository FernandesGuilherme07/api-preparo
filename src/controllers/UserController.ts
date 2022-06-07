// Model
import { UserModel } from "../models/User";

import { CrudModule } from "../modules/CrudModule";

export const createUser = CrudModule("create", UserModel);
export const getAllUsers = CrudModule("get", UserModel);
export const findUSerById = CrudModule("getById", UserModel);
export const removeUser = CrudModule("delete", UserModel);
export const updateUser = CrudModule("update", UserModel);
