
import express from 'express';
import servicesController from '../controllers/services-controllers.js';

const servicesRoutes = express.Router();

servicesRoutes.use("/", servicesController);

export default servicesRoutes;

