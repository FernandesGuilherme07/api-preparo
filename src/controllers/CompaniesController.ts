import { Request, Response } from "express";
import Logger from "../../config/logger";
import { UserModel } from "../models/User";

export async function getAllcompanies(req: Request, res: Response) {
  try {
    const companies = await UserModel.find({ itsACompany: true });
    return res.status(200).json(companies);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "error internal." });
  }
}
