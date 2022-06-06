import { NextFunction, Request, Response } from "express";
import Logger from "../../config/logger";

// Model
import { OpportunitiesModel } from "../models/Opportunities";

export default async function OpportunitiesExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const Opportunitie = await OpportunitiesModel.findById(id);

    if (!Opportunitie) {
      return res.status(404).json({ error: "Opportunitie does not exist." });
    }
    return next();
  } catch (error) {
    Logger.error(`Error: ${error}`);
    return res.status(404).json({ error: "Opportunitie does not exist." });
  }
}
