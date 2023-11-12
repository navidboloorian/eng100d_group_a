import { Schema, model } from "mongoose";

const questionSchema = Schema({
    text: {type: String, required: true},
});

export default model("Question", questionSchema);