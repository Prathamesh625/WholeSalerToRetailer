import { Request, Response, NextFunction } from 'express';
import StoreModel from '../models/store.model.js'; // Adjust the import path if necessary
import AppError from '../middlewares/AppError.js'; // Adjust the import path if necessary

export const createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { User, StoreID, StoreName, Products } = req.body;

        const newStore = await StoreModel.create({ User, StoreID, StoreName, Products });
        res.status(201).json({ success: true, data: newStore });
    } catch (error) {
        next(error);
    }
};

export const getStores = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stores = await StoreModel.find().populate('User Products');
        res.status(200).json({ success: true, data: stores });
    } catch (error) {
        next(error);
    }
};

export const getStoreById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const store = await StoreModel.findById(id).populate('User Products');

        if (!store) {
            return next(new AppError('Store not found', 404));
        }

        res.status(200).json({ success: true, data: store });
    } catch (error) {
        next(error);
    }
};

export const updateStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { User, StoreID, StoreName, Products } = req.body;

        const updatedStore = await StoreModel.findByIdAndUpdate(
            id,
            { User, StoreID, StoreName, Products },
            { new: true }
        );

        if (!updatedStore) {
            return next(new AppError('Store not found', 404));
        }

        res.status(200).json({ success: true, data: updatedStore });
    } catch (error) {
        next(error);
    }
};

export const deleteStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedStore = await StoreModel.findByIdAndDelete(id);

        if (!deletedStore) {
            return next(new AppError('Store not found', 404));
        }

        res.status(200).json({ success: true, message: 'Store deleted successfully' });
    } catch (error) {
        next(error);
    }
};
