import express from "express";
import { loginUser, refreshToken, verifyAccessToken } from "../controllers/auth.controllers.js";


const authRouter = express.Router();

//login
authRouter.post("/auth/obtain-token", loginUser)

//get new access token
authRouter.post("/auth/refresh-token", refreshToken)

//verify token
authRouter.post("/auth/verify-token", verifyAccessToken)


export { authRouter }