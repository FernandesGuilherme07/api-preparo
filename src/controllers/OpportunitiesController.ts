import { Request, Response } from "express";
import Logger from "../../config/logger";
import { OpportunitiesModel } from "../models/Opportunities";
import { CrudModule } from "../modules/CrudModule";

export const createOpportunitie = async (req: Request, res: Response) => {
  try {
    const { user_Id } = req.params;
    const data: Object | any = req.body;
    const createData = await OpportunitiesModel.create({
      ...data,
      user_id: user_Id,
    });
    return res.status(201).json(createData);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(500).json({ error: "internal error." });
  }
};
// corrirgir
export const getAllOpportunitie = CrudModule("get", OpportunitiesModel);

export async function getAllOpportunitieByUserId(req: Request, res: Response) {
  try {
    const { user_Id } = req.params;
    const Opportunities = await OpportunitiesModel.find({ user_id: user_Id });
    return res.status(200).json(Opportunities);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "error internal." });
  }
}

export const findOpportunitieById = CrudModule(
  "getById",
  OpportunitiesModel,
  "opportunitie_Id"
);
export const removeOpportunitie = CrudModule(
  "delete",
  OpportunitiesModel,
  "opportunitie_Id"
);
export const updateOpportunitie = CrudModule(
  "update",
  OpportunitiesModel,
  "opportunitie_Id"
);
