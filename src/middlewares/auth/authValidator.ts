import { body } from "express-validator";

export const AuthValidator = () => {
  return [
    body("email").isEmail().withMessage("email is mandatory."),
    body("password").isString().withMessage("Password is mandatory."),
  ];
};
