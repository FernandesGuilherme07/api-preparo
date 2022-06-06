import { Request, Response } from "express";
import { createPasswordHash } from "../services/bcrypt";
import { IUser } from "../interfaces/User";

// Model
import User from "../models/User";

// Logger
import Logger from "../../config/logger";

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password, brith, itsACompany }: IUser = req.body;
    const encryptedPassword = await createPasswordHash(password);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
      brith,
      itsACompany,
    });
    return res.status(201).json(user);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}

export async function findUSerById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "user does not exist." });
    }

    return res.status(200).json(user);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
    return res.json({ error: e });
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}

export async function removeUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "user does not exist." });
    }

    console.log(user);

    await user.delete();

    return res.status(201).json({ msg: "user successfully removed!" });
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
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

    const existsUser = await User.findById(id);

    if (!existsUser) {
      return res.status(404).json({ error: "user does not exist." });
    }

    await User.updateOne({ _id: id }, existsUser);

    return res.status(200).json(user);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}
