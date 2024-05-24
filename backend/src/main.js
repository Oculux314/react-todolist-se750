import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { errorhandler, notFound } from "./errorHandler.js";
import router from "./routes/mainRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static("public"));
app.use("/", router);

app.use(notFound);
app.use(errorhandler);

await mongoose.connect(process.env.DB_URL);
console.log(`Connected to MongoDB at ${process.env.DB_URL}`);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
