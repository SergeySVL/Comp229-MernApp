
import express from 'express';
import projectsController from '../controllers/projects-controllers.js';

const projectsRoutes = express.Router();

projectsRoutes.use("/", projectsController);

export default projectsRoutes;

