// Error-handling middleware function
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    // Log error for debugging
    console.error(`[Error] ${statusCode}: ${message}`);
    // Respond with a structured error message
    res.status(statusCode).json({
        success: false,
        message,
    });
};
export default errorMiddleware;
