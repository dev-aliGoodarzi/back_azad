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
exports.postFormData = void 0;
const express_1 = require("express");
const checkIsNull_1 = require("../../Validator/checkIsNull");
const models_1 = require("../../models/models");
exports.postFormData = (0, express_1.Router)();
exports.postFormData.post(`/postFormData`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = {};
    const { name, lastName, fatherName, nationalCode } = req.body;
    (0, checkIsNull_1.checkIsNull)(name, "string", {
        errorKey: "name",
        errorMessage: `err in name`,
    }, (_errData, errKey) => {
        errors[errKey] = _errData;
    });
    (0, checkIsNull_1.checkIsNull)(lastName, "string", {
        errorKey: "lastName",
        errorMessage: `err in lastName`,
    }, (_errData, errKey) => {
        errors[errKey] = _errData;
    });
    (0, checkIsNull_1.checkIsNull)(lastName, "string", {
        errorKey: "lastName",
        errorMessage: `err in lastName`,
    }, (_errData, errKey) => {
        errors[errKey] = _errData;
    });
    (0, checkIsNull_1.checkIsNull)(nationalCode, "string", {
        errorKey: "nationalCode",
        errorMessage: `err in nationalCode`,
    }, (_errData, errKey) => {
        errors[errKey] = _errData;
    });
    (0, checkIsNull_1.checkIsNull)(fatherName, "string", {
        errorKey: "fatherName",
        errorMessage: `err in fatherName`,
    }, (_errData, errKey) => {
        errors[errKey] = _errData;
    });
    if (Object.keys(errors).length > 0) {
        res.status(412).json(errors);
    }
    else {
        const max = (yield models_1.FormModel.find()).length;
        const newData = new models_1.FormModel({
            currLocationData: {
                ip: req.ip,
            },
            fatherName,
            lastName,
            name,
            nationalCode,
            formId: max + 1,
        });
        yield newData.save();
        res.status(200).json({ message: "done", formId: max + 1 });
    }
}));
