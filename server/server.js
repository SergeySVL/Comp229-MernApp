
// const express = require('express'); // ES5 and older JS

import express from 'express';
import homeRoutes from './routes/home-routes.js';
import aboutRoutes from './routes/about-routes.js';
import contactRoutes from './routes/contact-routes.js';
import projectsRoutes from './routes/projects-routes.js';
import servicesRoutes from './routes/services-routes.js';

const app = express();

// this is middleware route and function - we want to control them separately in MVC so -
// moving this into separate files in routes and controllers
// app.use("/", (req, res) => { res.send("Hello World"); });

app.use('/home', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/projects', projectsRoutes);
app.use('/services', servicesRoutes);

app.listen(3001);

console.log('Server is running on port 3001');


