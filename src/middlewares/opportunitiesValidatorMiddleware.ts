import { body } from "express-validator";

export const OppornutiesValidation = () => {
  return [
    body("name").isString().withMessage("name is mandatory."),
    body("description").isString().withMessage("description is mandatory."),
    body("about").isString().withMessage("about is mandatory."),
    body("responsibilities")
      .isString()
      .withMessage("responsibilities is mandatory."),
  ];
};
