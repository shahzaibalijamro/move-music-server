import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { getStoreUrlById, getStoreUrls } from "../controllers/store-urls.controllers.js";

const storeUrlRouter = express.Router();

//get all store urls
storeUrlRouter.get("/store-urls/",checkAccessToken,getStoreUrls)

//get store url by id
storeUrlRouter.get("/store-urls/:id",checkAccessToken,getStoreUrlById)

export { storeUrlRouter }