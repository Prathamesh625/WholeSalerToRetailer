import { Response } from 'express';

// Extend Express's Response object to include a new method
interface ApiResponse<T> extends Response {
    apiSuccess: (data: T, message?: string, statusCode?: number) => void;
}

// Define the middleware function to add the `apiSuccess` method
const apiResponseMiddleware = (req: any, res: ApiResponse<any>, next: any) => {
    res.apiSuccess = function (data, message = 'Request was successful', statusCode = 200) {
        return this.status(statusCode).json({
            success: true,
            message,
            data,
        });
    };

    next();
};

export default apiResponseMiddleware;
