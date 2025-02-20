import express from "express";
import { checkAccessToken } from "../middlewares/auth.middelware.js";
import { addPublisher, editPublisher, getAllPublishers, getPublisherById, updatePublisher } from "../controllers/publisher.controllers.js";

const publisherRouter = express.Router();

//get all publishers
publisherRouter.get("/publishers/",checkAccessToken,getAllPublishers)

//add publisher
publisherRouter.post("/publishers/",checkAccessToken,addPublisher)

//get publisher by Id
publisherRouter.get("/publishers/:id",checkAccessToken,getPublisherById)

//update publisher
publisherRouter.put("/publishers/:id",checkAccessToken,updatePublisher)

//edit publisher
publisherRouter.patch("/publishers/:id",checkAccessToken,editPublisher)

export { publisherRouter }