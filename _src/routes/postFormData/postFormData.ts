import { Router } from "express";
import { checkIsNull } from "../../Validator/checkIsNull";
import { FormModel } from "../../models/models";

export const postFormData = Router();

postFormData.post(`/postFormData`, async (req, res) => {
  const errors: { [key: string]: any } = {};

  const { name, lastName, fatherName, nationalCode } = req.body;

  checkIsNull(
    name,
    "string",
    {
      errorKey: "name",
      errorMessage: `err in name`,
    },
    (_errData, errKey) => {
      errors[errKey] = _errData;
    }
  );
  checkIsNull(
    lastName,
    "string",
    {
      errorKey: "lastName",
      errorMessage: `err in lastName`,
    },
    (_errData, errKey) => {
      errors[errKey] = _errData;
    }
  );
  checkIsNull(
    lastName,
    "string",
    {
      errorKey: "lastName",
      errorMessage: `err in lastName`,
    },
    (_errData, errKey) => {
      errors[errKey] = _errData;
    }
  );
  checkIsNull(
    nationalCode,
    "string",
    {
      errorKey: "nationalCode",
      errorMessage: `err in nationalCode`,
    },
    (_errData, errKey) => {
      errors[errKey] = _errData;
    }
  );
  checkIsNull(
    fatherName,
    "string",
    {
      errorKey: "fatherName",
      errorMessage: `err in fatherName`,
    },
    (_errData, errKey) => {
      errors[errKey] = _errData;
    }
  );

  if (Object.keys(errors).length > 0) {
    res.status(412).json(errors);
  } else {
    const max = (await FormModel.find()).length;
    const newData = new FormModel({
      currLocationData: {
        ip: req.ip,
      },
      fatherName,
      lastName,
      name,
      nationalCode,
      formId: max + 1,
    });

    await newData.save();

    res.status(200).json({ message: "done", formId: max + 1 });
  }
});
