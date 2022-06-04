import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connectDB() {
  const dbUri = config.get<string>("dbUri");
  await mongoose.connect(`${dbUri}`);
  try {
    return Logger.info("DB Connected.");
  } catch (e) {
    return Logger.error({ connection_db_error: e });
  }
}

export default connectDB;
