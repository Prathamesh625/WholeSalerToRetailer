import express from 'express';
import {
    createWholesaler,
    getWholesalers,
    getWholesalerById,
    updateWholesaler,
    deleteWholesaler,
} from '../controllers/saler.controller.js'; // Adjust the path to your controller
import authMiddleware from '../middlewares/AuthMiddlewares.js'; // Adjust the path to your auth middleware

const router = express.Router();

// Apply the authentication middleware to all routes
router.use(authMiddleware);

// Define routes with chained methods
router.route('/')
    .get(getWholesalers)
    .post(createWholesaler);

router.route('/:id')
    .get(getWholesalerById)
    .put(updateWholesaler)
    .delete(deleteWholesaler);

export default router;
