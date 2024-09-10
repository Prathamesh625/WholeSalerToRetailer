import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/product.models.js'; // Adjust the import path if necessary
import AppError from '../middlewares/AppError.js'; // Adjust the import path if necessary

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ProductID, ProductName, IsAvailable, Price, Quantity } = req.body;

        const newProduct = await ProductModel.create({ ProductID, ProductName, IsAvailable, Price, Quantity });
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        next(error);
    }
};

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);

        if (!product) {
            return next(new AppError('Product not found', 404));
        }

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { ProductID, ProductName, IsAvailable, Price, Quantity } = req.body;

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { ProductID, ProductName, IsAvailable, Price, Quantity },
            { new: true }
        );

        if (!updatedProduct) {
            return next(new AppError('Product not found', 404));
        }

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return next(new AppError('Product not found', 404));
        }

        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
};
