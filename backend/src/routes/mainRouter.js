import { Router } from "express";
import apiRouter from "./api/apiRouter.js";

const mainRouter = Router();

mainRouter.use("/api", apiRouter);

export default mainRouter;
