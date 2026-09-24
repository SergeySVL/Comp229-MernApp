
import express from 'express';
import aboutController from '../controllers/about-controllers.js';

const aboutRoutes = express.Router();

aboutRoutes.use("/", aboutController);

export default aboutRoutes;

