// Express
import express from "express";
// Express

// Mongoose
import mongoose from "mongoose";
// Mongoose

// Utils
import * as bodyParser from "body-parser";
import { postFormData } from "./routes/postFormData/postFormData";
import { GetFormData } from "./routes/getFormData/getFormData";
// Utils

require("dotenv").config();

const app = express();

app.use((bodyParser as any).urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(postFormData);
app.use(GetFormData);

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log(`connected to db @ ${process.env.MONGODB_URI}`);
});

app.listen(process.env.SERVER_PORT as string, () => {
  console.log(`server runs @ localhost:${process.env.SERVER_PORT}`);
});
