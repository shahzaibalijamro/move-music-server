import express from 'express';
import { checkAccessToken } from '../middlewares/auth.middelware.js';
import { getDeliveryConfirmationById, getDeliveryConfirmations } from '../controllers/delivery-confirmations.controllers.js';

const delieveryConfirmationRouter = express.Router();

delieveryConfirmationRouter.get('/ddex-delivery-confirmations/', checkAccessToken, getDeliveryConfirmations);

delieveryConfirmationRouter.get('/ddex-delivery-confirmations/:id/', checkAccessToken, getDeliveryConfirmationById);

export { delieveryConfirmationRouter };