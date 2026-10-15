
// const express = require('express'); // ES5 and older JS

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // load environment variables from .env file

import express from 'express';

import projectsRoutes from './routes/projects-routes.js';
import userRoutes from './routes/user-routes.js';
import authMiddleware from './middlewares/auth.js';


// establishing a DB connection
mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', function() {
    console.log("MongoDB connection established successfully.");
});


const app = express();

// need this middleware to parse json
app.use(express.json());


// this is middleware route and function - we want to control them separately in MVC so -
// moving this into separate files in routes and controllers
// app.use("/", (req, res) => { res.send("Hello World"); });

app.use('/projects', authMiddleware, projectsRoutes);
app.use('/users', userRoutes);

app.listen(3001);

console.log('Server is running on port 3001');


