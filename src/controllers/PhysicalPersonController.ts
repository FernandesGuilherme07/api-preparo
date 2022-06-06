import { Request, Response } from "express";
import Logger from "../../config/logger";
import { UserModel } from "../models/User";

export async function PhysicalPerson(req: Request, res: Response) {
  try {
    const physicalPerson = await UserModel.find({ itsACompany: false });
    return res.status(200).json(physicalPerson);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ error: "error internal." });
  }
}
