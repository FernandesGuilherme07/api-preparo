import { Request, Response } from "express";
// Model
import { OpportunitiesModel } from "../models/Opportunities";
import { UserModel } from "../models/User";
// Logger
import Logger from "../../config/logger";

export async function createOpportunitie(req: Request, res: Response) {
  try {
    const { name, description, responsibilities, benefits, Candidates } =
      req.body;
    const { user_id } = req.params;
    const user = await UserModel.findById(user_id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }

    const Opportunitie = await OpportunitiesModel.create({
      name,
      description,
      responsibilities,
      benefits,
      Candidates,
      numberOfCandidates: 0,
    });
    return res.status(201).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
  }
}

export async function findOpportunitieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const Opportunitie = await OpportunitiesModel.findById(id);
    const user = await UserModel.findById(req.params.user_Id);

    if (!user) {
      console.log(user);
      return res.status(404).json({ err: "user doest exists." });
    }

    if (!Opportunitie) {
      return res.status(404).json({ error: "Opportunitie does not exist." });
    }

    return res.status(200).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or Opportunitie doest exists." });
  }
}

export async function getAllOpportunitie(req: Request, res: Response) {
  try {
    const { user_Id } = req.params;
    const user = await UserModel.findById(user_Id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }
    const Opportunitie = await OpportunitiesModel.find();
    return res.status(200).json(Opportunitie);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user doest exists." });
  }
}

export async function removeOpportunitie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const Opportunitie = await OpportunitiesModel.findById(id);
    const { user_Id } = req.params;
    const user = await UserModel.findById(user_Id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }

    if (!Opportunitie) {
      return res.status(404).json({ error: "Opportunitie does not exist." });
    }
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
    const id = req.params.id;
    const Opportunitie = await OpportunitiesModel.findById(id);
    const user = await UserModel.findById(req.params.user_Id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }

    if (!Opportunitie) {
      return res.status(404).json({ error: "resume does not exist." });
    }

    await Opportunitie.updateOne({
      _id: id,
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
