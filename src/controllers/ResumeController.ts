import { Request, Response } from "express";
// Model
import Resume from "../models/Resume";
// Logger
import Logger from "../../config/logger";

export async function createResume(req: Request, res: Response) {
  try {
    const {
      about,
      brith,
      address,
      email,
      fullName,
      training,
      courses,
      experiences,
    } = req.body;
    const { user_id } = req.params;

    const resume = await Resume.create({
      user_Id: user_id,
      about,
      brith,
      address,
      email,
      fullName,
      training,
      courses,
      experiences,
    });
    return res.status(201).json(resume);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
  }
}

export async function findResumeById(req: Request, res: Response) {
  try {
    const resume = await Resume.findById(req.params.id);

    return res.status(200).json(resume);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or resume doest exists." });
  }
}

export async function getAllResume(req: Request, res: Response) {
  try {
    const resume = await Resume.find();
    return res.status(200).json(resume);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user doest exists." });
  }
}

export async function removeResume(req: Request, res: Response) {
  try {
    const resume = await Resume.findById(req.params.id);

    await resume.delete();

    return res.status(201).json({ msg: "resume successfully removed!" });
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or resume doest exists." });
  }
}

export async function updateResume(req: Request, res: Response) {
  try {
    const {
      about,
      brith,
      address,
      email,
      fullName,
      training,
      courses,
      experiences,
    } = req.body;
    const resume = await Resume.findById(req.params.id);

    await resume.updateOne({
      _id: req.params.id,
      about,
      brith,
      address,
      email,
      fullName,
      training,
      courses,
      experiences,
    });

    return res.status(200).json(resume);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or resume doest exists." });
  }
}
