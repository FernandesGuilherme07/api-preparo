import { body } from "express-validator";

export const candidacyValidation = () => {
  return [body("resume").isString().withMessage("resume is mandatory.")];
};
