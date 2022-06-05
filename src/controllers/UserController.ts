import { Request, Response } from "express";

// Model
import User from "../models/User";

// Logger
import Logger from "../../config/logger";

export async function createUser(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await User.create(data);
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
    const data = req.body;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "user does not exist." });
    }

    await User.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}
