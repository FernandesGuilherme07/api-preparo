import { NextFunction, Request, Response } from "express";
import Logger from "../../config/logger";

// Model
import Resume from "../models/Resume";

export default async function ResumeExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const resume = await Resume.findById(id);

    if (!resume) {
      return res.status(404).json({ error: "resume does not exist." });
    }
    return next();
  } catch (error) {
    Logger.error(`Error: ${error}`);
    return res.status(404).json({ error: "resume does not exist." });
  }
}
