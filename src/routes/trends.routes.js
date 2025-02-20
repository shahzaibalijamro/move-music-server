import express from "express";
import { getTrends, getTrendById } from "../controllers/trends.controllers.js";
import { checkAccessToken } from "../middlewares/auth.middelware.js";

const trendsRouter = express.Router();

// Get all trends with filters
trendsRouter.get("/trends/", checkAccessToken, getTrends);

// Get trend by ID
trendsRouter.get("/trends/:id", checkAccessToken, getTrendById);

export { trendsRouter };