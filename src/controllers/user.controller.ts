import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../middlewares/asyncHandler.js'; 4
import User from '../models/user.model.js';
import AppError from '../middlewares/AppError.js';
// Controller to get all users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
});

// Controller to get a single user by ID
export const getUserById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    res.status(200).json({ success: true, data: user });
});

// Controller to create a new user
export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const { Username, Email, PhoneNo, Password, Role } = req.body;

    const user = await User.create({
        Username,
        Email,
        PhoneNo,
        Password,
        Role,
    });

    res.status(201).json({ success: true, data: user });
});

// Controller to update an existing user by ID
export const updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!user) {
        return next(new AppError('User not found', 404));
    }

    res.status(200).json({ success: true, data: user });
});

// Controller to delete a user by ID
export const deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next(new AppError('User not found', 404));
    }

    res.status(200).json({ success: true, message: 'User deleted successfully' });
});
