import mongoose from "mongoose";
import { FormSchema } from "../schemas/schemas";
import { T_FormType } from "../types/Types";

export const FormModel = mongoose.model<T_FormType>("formData", FormSchema);
