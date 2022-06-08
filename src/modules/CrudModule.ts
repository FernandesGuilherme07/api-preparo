import { Request, Response } from "express";
// Bcrypt
import { createPasswordHash } from "../services/bcrypt";
// Logger
import Logger from "../../config/logger";
import { Mongoose } from "mongoose";

export const CrudModule = (
  type: "create" | "update" | "delete" | "get" | "getById",
  model: Mongoose["Model"],
  id?: any
) => {
  const create = async (req: Request, res: Response) => {
    try {
      const data: Object | any = req.body;
      if (data.password) {
        const encryptedPassword = await createPasswordHash(data.password);
        data.password = encryptedPassword;
        const createData = await model.create(data);
        return res.status(201).json(createData);
      }
      const createData = await model.create(data);
      return res.status(201).json(createData);
    } catch (e: any) {
      Logger.error(`Error: ${e.message}`);
      return res.status(500).json({ error: "internal error." });
    }
  };

  const getAll = async (req: Request, res: Response) => {
    try {
      const getData: Array<any> = await model.find();
      return res.status(200).json(getData);
    } catch (e: any) {
      Logger.error(`Error: ${e.message}`);
      return res.status(404).json({ error: "internal error." });
    }
  };

  const getById = async (req: Request, res: Response) => {
    try {
      const Id = req.params[id];
      const getData: Object | null = await model.findById({ _id: Id });
      return res.status(200).json(getData);
    } catch (e: any) {
      Logger.error(`Error: ${e.message}`);
      return res.status(404).json({ error: "internal error." });
    }
  };

  const remove = async (req: Request, res: Response) => {
    try {
      const Id = req.params[id];
      const data = await model.findById({ _id: Id });
      await data.delete();

      return res.status(204).json({ msg: "successfully removed!" });
    } catch (e: any) {
      Logger.error(`Error: ${e.message}`);
      return res.status(404).json({ error: "error internal." });
    }
  };

  const update = async (req: Request, res: Response) => {
    try {
      const Id = req.params[id];
      const data: Object | any = req.body;

      if (data.password) {
        const encryptedPassword = await createPasswordHash(data.password);
        data.password = encryptedPassword;
        await model.updateOne({ _id: Id }, data);
        return res.status(202).json(data);
      }

      await model.updateOne({ _id: Id }, data);
      return res.status(202).json(data);
    } catch (e: any) {
      Logger.error(`Error: ${e.message}`);
      return res.status(404).json();
    }
  };

  switch (type) {
    case "create":
      return create;
    case "update":
      return update;
    case "delete":
      return remove;
    case "get":
      return getAll;
    case "getById":
      return getById;
  }
};
