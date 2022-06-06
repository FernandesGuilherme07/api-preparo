import { Request, Response } from "express";
// Model
import Resume from "../models/Resume";
import { UserModel } from "../models/User";
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
    const user = await UserModel.findById(user_id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }

    const resume = await Resume.create({
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
    const id = req.params.id;
    const resume = await Resume.findById(id);
    const user = await UserModel.findById(req.params.user_Id);

    if (!user) {
      console.log(user);
      return res.status(404).json({ err: "user doest exists." });
    }

    if (!resume) {
      return res.status(404).json({ error: "Resume does not exist." });
    }

    return res.status(200).json(resume);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user or resume doest exists." });
  }
}

export async function getAllResume(req: Request, res: Response) {
  try {
    const { user_Id } = req.params;
    const user = await UserModel.findById(user_Id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }
    const resume = await Resume.find();
    return res.status(200).json(resume);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    return res.status(404).json({ err: "user doest exists." });
  }
}

export async function removeResume(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const resume = await Resume.findById(id);
    const { user_Id } = req.params;
    const user = await UserModel.findById(user_Id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }

    if (!resume) {
      return res.status(404).json({ error: "resume does not exist." });
    }

    console.log(resume);

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
    const id = req.params.id;
    const resume = await Resume.findById(id);
    const user = await UserModel.findById(req.params.user_Id);

    if (!user) {
      return res.status(404).json({ err: "user doest exists." });
    }

    if (!resume) {
      return res.status(404).json({ error: "resume does not exist." });
    }

    await resume.updateOne({
      _id: id,
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
