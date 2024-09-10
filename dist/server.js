import express from 'express';
import cors from 'cors';
import errorMiddleware from './middlewares/errorMiddleware.js'; // Adjust the path if necessary
import { ConnectToDB } from './config/db.config.js'; // Adjust the path if necessary
const app = express();
// Connect to the database
ConnectToDB();
// Use CORS middleware
app.use(cors({
    origin: process.env.ORIGIN?.split(','), // Allows multiple origins from environment variables
}));
// Use JSON parser middleware to handle JSON requests
app.use(express.json());
// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello, how are you man?');
});
// Error handling middleware should be added after all routes
app.use(errorMiddleware);
// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
export { app };
