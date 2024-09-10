import { Request, Response, NextFunction } from 'express';
import WholesalerModel from '../models/saler.model.js';// Adjust the import path as needed
import AppError from '../middlewares/AppError.js'; // Adjust the import path as needed

// Create a new wholesaler
export const createWholesaler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { WholesalerID, User, Product } = req.body;

        const newWholesaler = await WholesalerModel.create({ WholesalerID, User, Product });
        res.status(201).json({ success: true, data: newWholesaler });
    } catch (error) {
        next(error);
    }
};

// Get all wholesalers
export const getWholesalers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const wholesalers = await WholesalerModel.find().populate('User Product');
        res.status(200).json({ success: true, data: wholesalers });
    } catch (error) {
        next(error);
    }
};

// Get a wholesaler by ID
export const getWholesalerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const wholesaler = await WholesalerModel.findById(id).populate('User Product');

        if (!wholesaler) {
            return next(new AppError('Wholesaler not found', 404));
        }

        res.status(200).json({ success: true, data: wholesaler });
    } catch (error) {
        next(error);
    }
};

// Update a wholesaler
export const updateWholesaler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { WholesalerID, User, Product } = req.body;

        const updatedWholesaler = await WholesalerModel.findByIdAndUpdate(id, { WholesalerID, User, Product }, { new: true });

        if (!updatedWholesaler) {
            return next(new AppError('Wholesaler not found', 404));
        }

        res.status(200).json({ success: true, data: updatedWholesaler });
    } catch (error) {
        next(error);
    }
};

// Delete a wholesaler
export const deleteWholesaler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedWholesaler = await WholesalerModel.findByIdAndDelete(id);

        if (!deletedWholesaler) {
            return next(new AppError('Wholesaler not found', 404));
        }

        res.status(200).json({ success: true, message: 'Wholesaler deleted successfully' });
    } catch (error) {
        next(error);
    }
};
