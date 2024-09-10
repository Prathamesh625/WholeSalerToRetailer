import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js'; // Adjust the import path if necessary
import authMiddleware from '../middlewares/AuthMiddlewares.js'; // Adjust the import path if necessary

const router = express.Router();

// Define routes
router.use(authMiddleware);
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

export default router;
