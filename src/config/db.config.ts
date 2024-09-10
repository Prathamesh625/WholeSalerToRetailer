import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

const ConnectToDB = () => {
  const mongoUrl = process.env.MONGO_URL as string;

  if (!mongoUrl) {
    logger.error('MONGO_URL is not defined in environment variables');
    return;
  }

  mongoose
    .connect(mongoUrl)
    .then(() => logger.info('Connected To Database Successfully!'))
    .catch((error) => logger.error('Failed to connect to Database', error));
};

export { ConnectToDB };
