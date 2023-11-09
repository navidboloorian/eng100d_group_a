import { Schema, model } from "mongoose";

const jobSchema = Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true}
});

export default model("Job", jobSchema);