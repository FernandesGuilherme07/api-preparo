import { NextFunction, Request, Response } from "express";
import Logger from "../../../config/logger";

// Model
import { OpportunitiesModel } from "../../models/Opportunities";

export default async function OpportunitiesIdIdValid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { opportunitie_Id } = req.params;
    const Opportunitie = await OpportunitiesModel.findById(opportunitie_Id);

    if (!Opportunitie) {
      return res.status(404).json({ error: "Opportunitie does not exist." });
    }
    return next();
  } catch (error) {
    Logger.error(`Error: ${error}`);
    return res.status(404).json({ error: "Opportunitie does not exist." });
  }
}
