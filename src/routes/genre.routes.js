import express from 'express';
import { checkAccessToken } from '../middlewares/auth.middelware.js';
import { getGenres, getGenreById } from '../controllers/genre.controllers.js';

const genreRouter = express.Router();

//get all contributor roles
genreRouter.get('/genres/', checkAccessToken, getGenres);

//get contributor role by id
genreRouter.get('/genres/:id', checkAccessToken, getGenreById);

export { genreRouter };