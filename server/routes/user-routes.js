
import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, loginUser } 
from '../controllers/user-controllers.js';

const router = express.Router();

// REST APIs simulate CRUD - APIs could be done in many ways, alternatives include GraphQL

// READs
router.get("/", getAllUsers);
router.get("/:id", getUserById);

// CREATE
router.post("/", createUser);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

router.post('/login', loginUser);

export default router;

