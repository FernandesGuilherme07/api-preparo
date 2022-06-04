import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ helo: "world" });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "internal error." });
  }
};
