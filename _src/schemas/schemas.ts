// Mongoose
import mongoose from "mongoose";
// Mongoose

// Types
import { T_FormType } from "../types/Types";
// Types

export const FormSchema = new mongoose.Schema<T_FormType>({
  formId: String,
  name: String,
  lastName: String,
  fatherName: String,
  nationalCode: String,
  currLocationData: {
    ip: String,
  },
});
