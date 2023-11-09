import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Mongoose connected!");
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}.`);
        })
    })
    .catch(console.error);