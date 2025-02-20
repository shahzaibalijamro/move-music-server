import express from 'express';
import { checkAccessToken } from '../middlewares/auth.middelware.js';
import { addFeatureRequests, editFeatureRequest, getFeatureRequestById, getFeatureRequests, updateFeatureRequest } from '../controllers/feature-request.controllers.js';

const featureRequestRouter = express.Router();

featureRequestRouter.get('/feature-request/', checkAccessToken, getFeatureRequests);

featureRequestRouter.post('/feature-request/', checkAccessToken, addFeatureRequests);

featureRequestRouter.get('/feature-request/:id', checkAccessToken, getFeatureRequestById);

featureRequestRouter.put('/feature-request/:id', checkAccessToken, updateFeatureRequest);

featureRequestRouter.patch('/feature-request/:id', checkAccessToken, editFeatureRequest);

export { featureRequestRouter };