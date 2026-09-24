
import express from 'express';
import contactController from '../controllers/contact-controllers.js';

const contactRoutes = express.Router();

contactRoutes.use("/", contactController);

export default contactRoutes;

