import express from "express";
import { getAllTracks, getTrackById } from "../controllers/tracks.controllers.js";
import { checkAccessToken } from "../middlewares/auth.middelware.js";

const trackRouter = express.Router();

// Get all tracks
trackRouter.get("/tracks/", checkAccessToken, getAllTracks);

// Get track by ID
trackRouter.get("/tracks/:id", checkAccessToken, getTrackById);

export { trackRouter };