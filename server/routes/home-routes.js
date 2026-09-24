
import express from 'express';
import homeController from '../controllers/home-controllers.js';

const homeRoutes = express.Router();

homeRoutes.use("/", homeController);

export default homeRoutes;

