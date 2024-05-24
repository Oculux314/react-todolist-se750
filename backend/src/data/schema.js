import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
});

export const Todo = model("Todo", todoSchema);