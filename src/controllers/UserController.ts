import { Request, Response } from "express";
import { createPasswordHash } from "../services/bcrypt";
import { IUser } from "../interfaces/User";

// Model
import { UserModel } from "../models/User";

// Logger
import Logger from "../../config/logger";

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password, brith, itsACompany }: IUser = req.body;
    const encryptedPassword = await createPasswordHash(password);
    const user = await UserModel.create({
      name,
      email,
      password: encryptedPassword,
      brith,
      itsACompany,
    });
    return res.status(201).json(user);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(500).json({ error: "internal error." });
  }
}

export async function findUSerById(req: Request, res: Response) {
  try {
    const user = await UserModel.findById(req.params.id);

    return res.status(200).json(user);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "user does not exist." });
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const user = await UserModel.find();
    return res.status(200).json(user);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "error internal." });
  }
}

export async function removeUser(req: Request, res: Response) {
  try {
    const user = await UserModel.findById(req.params.id);
    await user.delete();

    return res.status(201).json({ msg: "user successfully removed!" });
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "user does not exist." });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { name, email, password, brith, itsACompany }: IUser = req.body;
    const encryptedPassword = await createPasswordHash(password);
    const user = {
      name,
      email,
      password: encryptedPassword,
      brith,
      itsACompany,
    };

    const existsUser = await UserModel.findById(id);

    await UserModel.updateOne({ _id: id }, existsUser);

    return res.status(200).json(user);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "user does not exist." });
  }
}
