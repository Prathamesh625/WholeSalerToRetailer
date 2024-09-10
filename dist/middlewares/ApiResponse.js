// Define the middleware function to add the `apiSuccess` method
const apiResponseMiddleware = (req, res, next) => {
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
