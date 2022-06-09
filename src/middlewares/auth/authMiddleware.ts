import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../../../config/auth";
import Logger from "../../../config/logger";

export default function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token was not provided." });

  try {
    jwt.verify(token, authConfig.secret);
    next();
  } catch (err) {
    Logger.error(err);
    return res.status(400).json({ msg: "invalid token" });
  }
}
