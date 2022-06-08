import { NextFunction, Request, Response } from "express";
import Logger from "../../../config/logger";

// Model
import candidacyModel from "../../models/candidacy";

export default async function CandidacyIdIdValid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { candidacy_Id } = req.params;
    const Opportunitie = await candidacyModel.findById(candidacy_Id);

    if (!Opportunitie) {
      return res.status(404).json({ error: "Opportunitie does not exist." });
    }
    return next();
  } catch (error) {
    Logger.error(`Error: ${error}`);
    return res.status(404).json({ error: "Opportunitie does not exist." });
  }
}
