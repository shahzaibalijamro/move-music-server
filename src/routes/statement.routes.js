import express from 'express';
import { checkAccessToken } from '../middlewares/auth.middelware.js';
import { getStatements,getStatementById } from '../controllers/statements.controllers.js';

const statementRouter = express.Router();

//get all statements
statementRouter.get('/statements/', checkAccessToken, getStatements);

//get contributor role by id
statementRouter.get('/statements/:id', checkAccessToken, getStatementById);

export { statementRouter };