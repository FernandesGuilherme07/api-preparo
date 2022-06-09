import { Request, Response } from "express";
import { UserModel } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import authConfig from "../../config/auth";
import Logger from "../../config/logger";

export const SessionController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "email is mandatory." });
  }

  if (!password) {
    return res.status(422).json({ msg: "senha is mandatory." });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    Logger.error({ error: "user not found." });
    return res.status(404).json({ msg: "user not found." });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    Logger.error({ error: "invalid password." });
    return res.status(422).json({ msg: "invalid password." });
  }

  try {
    const token = jwt.sign(
      {
        id: user._id,
      },
      authConfig.secret
    );

    return res
      .status(200)
      .json({ msg: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ msg: error });
  }
};
