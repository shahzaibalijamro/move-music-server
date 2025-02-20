import express from "express";
import { addArtist, updateArtist, getAllArtists, getArtistById, editArtist } from "../controllers/artist.controllers.js";
import { checkAccessToken } from "../middlewares/auth.middelware.js";

const artistRouter = express.Router();

//get all artists
artistRouter.get("/artists/",checkAccessToken,getAllArtists)

//add artist
artistRouter.post("/artists/",checkAccessToken,addArtist)

//get artist by Id
artistRouter.get("/artists/:id",checkAccessToken,getArtistById)

//update Artist
artistRouter.put("/artists/:id",checkAccessToken,updateArtist)

//edit Artist
artistRouter.patch("/artists/:id",checkAccessToken,editArtist)

export { artistRouter }