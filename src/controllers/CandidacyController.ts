import { Request, Response } from "express";
import { OpportunitiesModel } from "../models/Opportunities";
import CandidacyModel from "../models/candidacy";
import { CrudModule } from "../modules/CrudModule";
import Logger from "../../config/logger";
import { UserModel } from "../models/User";

export const createCandidacy = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.opportunitie_Id;
    const createData = await CandidacyModel.create(data);
    const { user_Id } = req.params;
    const infoCandidate = await UserModel.findById(user_Id);

    const candidate = {
      nameCandidate: infoCandidate.name,
      emailCandidate: infoCandidate.email,
      resume: data.resume,
    };

    await OpportunitiesModel.updateOne(
      { _id: id },
      { $inc: { numberOfCandidates: 1 } }
    );

    await OpportunitiesModel.findByIdAndUpdate(
      { _id: id },
      { $push: { candidates: candidate } }
    );
    console.log(candidate);
    return res.status(200).json(createData);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(500).json({ error: "internal error." });
  }
};

export const getAllCandidacy = CrudModule("get", CandidacyModel);

export const findCandidacyById = CrudModule(
  "getById",
  CandidacyModel,
  "candidacy_Id"
);
