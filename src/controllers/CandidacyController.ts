import { Request, Response } from "express";
import { OpportunitiesModel } from "../models/Opportunities";
import CandidacyModel from "../models/candidacy";
import { CrudModule } from "../modules/CrudModule";
import Logger from "../../config/logger";

export const createCandidacy = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.Opportunitie_Id;
    const createData = await CandidacyModel.create(data);

    await OpportunitiesModel.updateOne(
      { id },
      { $inc: { numberOfCandidates: 1 } }
    );

    return res.status(200).json(createData);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(500).json({ error: "internal error." });
  }
};
export const getAllCandidacy = CrudModule("get", CandidacyModel);
export const findCandidacyById = CrudModule("getById", CandidacyModel);
