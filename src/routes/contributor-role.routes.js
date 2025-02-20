import express from 'express';
import { checkAccessToken } from '../middlewares/auth.middelware.js';
import { getContributorRoles,getContributorRoleById } from '../controllers/contributor-role.controllers.js';

const contributorRoleRouter = express.Router();

//get all contributor roles
contributorRoleRouter.get('/contributor-roles/', checkAccessToken, getContributorRoles);

//get contributor role by id
contributorRoleRouter.get('/contributor-roles/:id', checkAccessToken, getContributorRoleById);

export { contributorRoleRouter };