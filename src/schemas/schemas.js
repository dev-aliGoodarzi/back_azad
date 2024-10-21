"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSchema = void 0;
// Mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// Types
exports.FormSchema = new mongoose_1.default.Schema({
    formId: String,
    name: String,
    lastName: String,
    fatherName: String,
    nationalCode: String,
    currLocationData: {
        ip: String,
    },
});
