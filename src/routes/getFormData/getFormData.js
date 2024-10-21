"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFormData = void 0;
const express_1 = require("express");
const checkIsNull_1 = require("../../Validator/checkIsNull");
const models_1 = require("../../models/models");
exports.GetFormData = (0, express_1.Router)();
exports.GetFormData.get("/getFormData/:formId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = {};
    (0, checkIsNull_1.checkIsNull)(req.params.formId, "string", {
        errorKey: "formId",
        errorMessage: `err in formId`,
    }, (_errData, errKey) => {
        errors[errKey] = _errData;
    });
    if (Object.keys(errors).length > 0) {
        res.status(412).json(errors);
    }
    else {
        const selectedForm = yield models_1.FormModel.findOne({
            formId: req.params.formId,
        });
        if (!selectedForm) {
            res.status(504).json({ message: "not found on db :(" });
            return;
        }
        res.status(200).json({ data: selectedForm });
    }
}));
