import App from "./app";
import config from "config";
import db from "../config/db";
import Logger from "../config/logger";

const port = config.get<number>("port");

App.listen(port, async () => {
  await db();

  Logger.info(`Servidor executando na porta ${port}`);
  Logger.info(`Ctrl + click: http://localhost:${port}`);
});
