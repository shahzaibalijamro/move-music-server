import express from "express";
import { addTrack, editTrack, getAllTracks, getTrackById, updateTrack } from "../controllers/tracks.controllers.js";
import { checkAccessToken } from "../middlewares/auth.middelware.js";

const trackRouter = express.Router();

// Get all tracks
trackRouter.get("/tracks/", checkAccessToken, getAllTracks);

//add tracks
trackRouter.post("/tracks/", checkAccessToken, addTrack);

// Get track by ID
trackRouter.get("/tracks/:id", checkAccessToken, getTrackById);

// update track
trackRouter.put("/tracks/:id", checkAccessToken, updateTrack);

// edit track
trackRouter.patch("/tracks/:id", checkAccessToken, editTrack);

export { trackRouter };