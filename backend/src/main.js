import cors from "cors";
import dotenv from "dotenv";
import express from "express";
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
