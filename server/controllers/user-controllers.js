
import userModel from "../models/user-model.js";
import generateToken from "../utils/jwt.js";

// CRUD - Create, Read, Update, Delete
// this is Read - all user because of find() without arguments
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// this is Read - retrieve a specific user under an ID
export const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();

        const token = generateToken(savedUser);
        console.log(savedUser, token);
        res.status(201).json({ user: savedUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." })
        } else {
            res.status(200).json(updatedUser);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deleteUSer) {
            return res.status(404).json({ message: "USer not found. "});
        } else {
            res.status(200).json({ message: "User deleted successfully." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if(!user) {
            return res.status(404).message({ message: "User not found." })
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials." });

        }

        const token = generateToken(user);

        res.status(200).json({ message: "Login Successfull.", token });
        } catch (error) {
            res.status(500),json({ message: error.message });
    }
}


