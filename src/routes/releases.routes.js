import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { addRelease, getAllReleases, updateReleaseStatus } from "../controllers/releases.controllers.js";

const releasesRouter = express.Router();

//get all artists
releasesRouter.get("/releases/",checkAccessToken,getAllReleases)

//add releases
releasesRouter.post("/releases/",checkAccessToken,addRelease)

//update release status
releasesRouter.post("/releases/update-status/",checkAccessToken,updateReleaseStatus)

export { releasesRouter }