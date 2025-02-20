import express from 'express';
import { checkAccessToken } from '../middlewares/auth.middelware.js';
import { getSubGenreById, getSubGenres } from '../controllers/subgenres.controllers.js';

const subGenreRouter = express.Router();

//get all contributor roles
subGenreRouter.get('/subgenres/', checkAccessToken, getSubGenres);

//get contributor role by id
subGenreRouter.get('/subgenres/:id', checkAccessToken, getSubGenreById);

export { subGenreRouter };