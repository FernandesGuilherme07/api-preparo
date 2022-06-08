/* eslint-disable prefer-promise-reject-errors */
import { body } from "express-validator";
import { IAddress } from "../../interfaces/Address";
import Resume from "../../models/Resume";

export const ResumeValidation = () => {
  return [
    body("fullName").isString().withMessage("fullName is mandatory."),
    body("email")
      .isEmail()
      .withMessage("email is mandatory.")
      .custom((value) => {
        return Resume.findOne({ email: value }).then(() => {
          return Promise.reject("email exists.");
        });
      }),
    body("address")
      .isObject()
      .withMessage("address is mandatory.")
      .custom((value: IAddress) => {
        if (!value.cep) {
          throw new Error("the address must have a cep.");
        } else if (!value.country) {
          throw new Error("the address must have a country.");
        } else if (!value.state) {
          throw new Error("the address must have a state.");
        } else if (!value.city) {
          throw new Error("the address must have a city.");
        } else if (!value.street) {
          throw new Error("the address must have a street.");
        } else if (!value.number) {
          throw new Error("the address must have a number.");
        }
        return true;
      }),
    body("brith").isString().withMessage("brith is mandatory."),
    body("about")
      .isString()
      .withMessage("itsACompany is mandatory.")
      .isLength({ min: 10 }),
    body("brith").isString().withMessage("brith is mandatory."),
    body("training.*.name")
      .isString()
      .withMessage("the training must have a name."),
    body("training.*.institution")
      .isString()
      .withMessage("the training must have a institution."),
    body("training.*.time")
      .isString()
      .withMessage("the training must have a time."),
    body("training.*.Description")
      .isString()
      .withMessage("the training must have a Description."),

    body("expreriences.*.title")
      .isString()
      .withMessage("the address must have a title."),
    body("expreriences.*.description")
      .isString()
      .withMessage("the address must have a description."),
    body("expreriences.*.dateYouEntered")
      .isString()
      .withMessage("the address must have a dateYouEntered."),
    body("expreriences.*.dateYouLeft")
      .isString()
      .withMessage("the address must have a dateYouLeft."),
  ];
};
