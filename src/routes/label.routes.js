import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { getLabels,addLabel, validateLabelName,getLabelById, updateLabel, editLabel } from "../controllers/labels.controllers.js";

const labelRouter = express.Router();

//get all labels
labelRouter.get("/labels/", checkAccessToken, getLabels)

//add label
labelRouter.post("/labels/", checkAccessToken, addLabel);

// validate label name
labelRouter.post("/labels/validate-label-name/", checkAccessToken, validateLabelName);

//get label by Id
labelRouter.get("/labels/:id", checkAccessToken, getLabelById)

//update label
labelRouter.put("/labels/:id", checkAccessToken, updateLabel)

//edit label
labelRouter.patch("/labels/:id", checkAccessToken, editLabel)

export { labelRouter }