import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import expRoutes from "./routes/expRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use("/api/exps", expRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Experiences").then(res => app.listen(PORT)).catch(err => console.log(err))