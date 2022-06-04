import "dotenv/config";

const {
  DB_DATABASE,
  DB_HOSTNAME,
  DB_PORT,
  APP_PORT,
  APP_URL,
  ENVIRONMENT,
  // DB_ATLAS
} = process.env;

const prodOrDev: String =
  ENVIRONMENT === "development"
    ? `mongodb://${APP_URL}:${DB_PORT}/${DB_DATABASE}`
    : `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_DATABASE}`;

export default {
  // with MongoDB atlas:
  // dbUri: DB_ATLAS

  // with Docker-compose:
  dbUri: prodOrDev,

  // Development
  env: ENVIRONMENT,
  port: APP_PORT,
};
