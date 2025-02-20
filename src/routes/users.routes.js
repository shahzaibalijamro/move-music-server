import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { getLoggedinUser, getUserDetails } from "../controllers/users.controllers.js";

const usersRouter = express.Router();

// Get all users with pagination
usersRouter.get("/users/", checkAccessToken, getUserDetails);

// Get a specific logged-in user by ID
usersRouter.get("/users/:id", checkAccessToken, getLoggedinUser);

export { usersRouter };