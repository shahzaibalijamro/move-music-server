import express from 'express';
import {
    getContributors,
    addContributor,
    getContributorById,
    updateContributorById,
    patchContributorById,
} from '../controllers/contributor.controllers.js';
import { checkAccessToken } from '../middlewares/auth.middelware.js';

const contributorRouter = express.Router();

contributorRouter.get('/contributors', checkAccessToken, getContributors);

contributorRouter.post('/contributors', checkAccessToken, addContributor);
contributorRouter.get(
    '/contributors/:id',
    checkAccessToken,
    getContributorById
);
contributorRouter.put(
    `/contributors/:id`,
    checkAccessToken,
    updateContributorById
);
contributorRouter.patch(
    `/contributors/:id`,
    checkAccessToken,
    patchContributorById
);

export { contributorRouter };