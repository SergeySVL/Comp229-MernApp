
import express from 'express';
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } 
from '../controllers/projects-controllers.js';

const projectsRoutes = express.Router();

// REST APIs simulate CRUD - APIs could be done in many ways, alternatives include GraphQL

// READs
projectsRoutes.get("/", getAllProjects);
projectsRoutes.get("/:id", getProjectById);

// CREATE
projectsRoutes.post("/", createProject);

// UPDATE
projectsRoutes.put("/:id", updateProject);

// DELETE
projectsRoutes.delete("/:id", deleteProject);

export default projectsRoutes;

