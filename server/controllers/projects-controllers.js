
import projectModel from "../models/project-model.js";

// CRUD - Create, Read, Update, Delete
// this is Read - all project because of find() without arguments
export const getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// this is Read - retrieve a specific project under an ID
export const getProjectById = async (req, res) => {
    try {
        const project = await projectModel.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    try {
        const newProject = new projectModel(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    try {
        const updatedProject = await projectModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found." })
        } else {
            res.status(200).json(updatedProject);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const deleteProject = await projectModel.findByIdAndDelete(req.params.id);
        if (!deleteProject) {
            return res.status(404).json({ message: "Project not found. "});
        } else {
            res.status(200).json({ message: "Project deleted successfully." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
