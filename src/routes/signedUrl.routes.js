import express from "express";

import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { generateSignedUrl } from "../controllers/signedUrl.controllers.js";

const signedUrlRouter = express.Router();

//get all artists
signedUrlRouter.get("/obtain-signed-url-for-upload/",checkAccessToken,generateSignedUrl)


export { signedUrlRouter }