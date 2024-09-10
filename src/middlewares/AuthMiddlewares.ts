import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/ModelTypes/user.js';
import jwt from 'jsonwebtoken'
import AppError from './AppError.js'; // Adjust the path to your AppError

interface AuthRequest extends Request {
    user?: any; // You can replace 'any' with a specific user type if you have it defined
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new AppError('Authorization token missing or invalid', 401));
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        // Add the user information to the request object
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        return next(new AppError('Invalid or expired token', 401));
    }
};

export default authMiddleware;
