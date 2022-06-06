import { NextFunction, Request, Response } from "express";
// Model
import { UserModel } from "../models/User";

export default async function UserIdIsValid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { user_Id } = req.params;
    const user = await UserModel.findById(user_Id);
    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }
    return next();
  } catch (error) {
    return res.status(404).json({ err: "user doest exists." });
  }
}
