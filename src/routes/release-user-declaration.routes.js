import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { releaseUserDeclaration } from "../controllers/release-user-declaration.controllers.js";

const releaseUserDeclarationRouter = express.Router();

// release user declaration
releaseUserDeclarationRouter.post("/release-user-declaration/",checkAccessToken,releaseUserDeclaration)

export { releaseUserDeclarationRouter }