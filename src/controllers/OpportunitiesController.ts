import { Request, Response } from "express";
// Model
import { OpportunitiesModel } from "../models/Opportunities";
// Logger
import Logger from "../../config/logger";

export async function createOpportunitie(req: Request, res: Response) {
  try {
    const { name, description, responsibilities, benefits, candidates, about } =
      req.body;
    const { user_id } = req.params;

    const Opportunitie = await OpportunitiesModel.create({
      user_Id: user_id,
      name,
      description,
      responsibilities,
      benefits,
      candidates,
      about,
      numberOfCandidates: 0,
    });
    return res.status(201).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
  }
}

export async function findOpportunitieById(req: Request, res: Response) {
  try {
    const Opportunitie = await OpportunitiesModel.findById(req.params.id);

    return res.status(200).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or Opportunitie doest exists." });
  }
}

export async function getAllOpportunitieByUserId(req: Request, res: Response) {
  try {
    const { user_Id } = req.params;

    const Opportunitie = await OpportunitiesModel.findOne({ user_Id });
    return res.status(200).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user doest exists." });
  }
}

export async function getAllOpportunitie(req: Request, res: Response) {
  try {
    const Opportunitie = await OpportunitiesModel.find();
    return res.status(200).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user doest exists." });
  }
}

export async function removeOpportunitie(req: Request, res: Response) {
  try {
    const Opportunitie = await OpportunitiesModel.findById(req.params.id);

    await Opportunitie.delete();

    return res.status(201).json({ msg: "Opportunitie successfully removed!" });
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or resume doest exists." });
  }
}

export async function updateOpportunitie(req: Request, res: Response) {
  try {
    const { name, description, responsibilities, benefits, Candidates } =
      req.body;
    const Opportunitie = await OpportunitiesModel.findById(req.params.id);

    await Opportunitie.updateOne({
      _id: req.params.id,
      name,
      description,
      responsibilities,
      benefits,
      Candidates,
    });

    return res.status(200).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or Opportunitie doest exists." });
  }
}
