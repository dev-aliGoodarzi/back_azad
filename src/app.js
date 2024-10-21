"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = __importDefault(require("express"));
// Express
// Mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// Mongoose
// Utils
const bodyParser = __importStar(require("body-parser"));
const postFormData_1 = require("./routes/postFormData/postFormData");
const getFormData_1 = require("./routes/getFormData/getFormData");
// Utils
require("dotenv").config();
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(postFormData_1.postFormData);
app.use(getFormData_1.GetFormData);
mongoose_1.default.connect(process.env.MONGODB_URI).then(() => {
    console.log(`connected to db @ ${process.env.MONGODB_URI}`);
});
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server runs @ localhost:${process.env.SERVER_PORT}`);
});
