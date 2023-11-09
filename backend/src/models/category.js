import { Schema, model } from "mongoose";

const categorySchema = Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    nextSteps: {type: String, required: true},
    jobs: {typee: Array, default: []},
});

export default model("Category", questionSchema);