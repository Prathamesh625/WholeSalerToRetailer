import express from 'express';
import cors from 'cors';
import { ConnectToDB } from './config/db.config.js';
const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

ConnectToDB();

app.get('/', (req, res) => {
  res.send('hello , how are you man?');
});

app.listen(6000, () =>
  console.log(`Server listening on port http://localhost:5000`)
);

export { app };
