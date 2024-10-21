import { Router } from "express";
import { checkIsNull } from "../../Validator/checkIsNull";
import { FormModel } from "../../models/models";

export const GetFormData = Router();

GetFormData.get("/getFormData/:formId", async (req, res) => {
  const errors: { [key: string]: any } = {};

  checkIsNull(
    req.params.formId,
    "string",
    {
      errorKey: "formId",
      errorMessage: `err in formId`,
    },
    (_errData, errKey) => {
      errors[errKey] = _errData;
    }
  );

  if (Object.keys(errors).length > 0) {
    res.status(412).json(errors);
  } else {
    const selectedForm = await FormModel.findOne({
      formId: req.params.formId,
    });
    if (!selectedForm) {
      res.status(504).json({ message: "not found on db :(" });
      return;
    }
    res.status(200).json({ data: selectedForm });
  }
});
