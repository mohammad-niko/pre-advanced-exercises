import mongoose from "mongoose";
const { Schema, model } = mongoose;

const memberSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  age: { type: Number, required: true, min: 18, max: 65 },
  gender: { type: String, required: true },
  exp: { type: Number, required: true },
  type: { type: String },
  qualification: { type: String },
});

const memnberModel = model("member", memberSchema);
export default memnberModel;
