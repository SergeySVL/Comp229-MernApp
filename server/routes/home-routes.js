
import express from 'express';
import homeController from '../controllers/home-controllers.js';

const homeRoutes = express.Router();

homeRoutes.get("/", homeController);

export default homeRoutes;

