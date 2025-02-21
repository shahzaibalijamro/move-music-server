import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { 
    addRelease, 
    getAllReleases, 
    getReleaseById, 
    updateRelease, 
    editRelease, 
    updateReleaseStatus 
} from "../controllers/releases.controllers.js";

const releasesRouter = express.Router();

// Get all releases
releasesRouter.get("/releases/", checkAccessToken, getAllReleases);

// Add a new release
releasesRouter.post("/releases/", checkAccessToken, addRelease);

// Update release status (Distribute, Takedown, Submit Editing)
releasesRouter.post("/releases/update-status/", checkAccessToken, updateReleaseStatus);

// Get release by ID
releasesRouter.get("/releases/:id", checkAccessToken, getReleaseById);

// Update an entire release (PUT)
releasesRouter.put("/releases/:id", checkAccessToken, updateRelease);

// Edit (partially update) a release (PATCH)
releasesRouter.patch("/releases/:id", checkAccessToken, editRelease);

export { releasesRouter };