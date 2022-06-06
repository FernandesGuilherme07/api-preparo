import { NextFunction, Request, Response } from "express";
import Logger from "../../config/logger";

// Model
import { UserModel } from "../models/User";

export default async function userExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      Logger.error({ error: "user does not exist." });
      return res.status(404).json({ error: "user does not exist." });
    }
    return next();
  } catch (error) {
    Logger.error({ error: "user does not exist." });
    return res.status(404).json({ error: "user does not exist." });
  }
}
