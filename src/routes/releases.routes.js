import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { getAllReleases } from "../controllers/releases.controllers.js";

const releasesRouter = express.Router();

//get all artists
releasesRouter.get("/releases/",checkAccessToken,getAllReleases)

export { releasesRouter }