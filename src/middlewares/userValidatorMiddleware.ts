import { body } from "express-validator";

export const UserValidation = () => {
  return [
    body("name").isString().withMessage("Title is mandatory."),
    body("email").isEmail().withMessage("email is mandatory."),
    body("password").isString().withMessage("Password is mandatory."),
    body("director").isString().withMessage("brith is mandatory."),
    body("itsACompany").isBoolean().withMessage("itsACompany is mandatory."),
  ];
};
