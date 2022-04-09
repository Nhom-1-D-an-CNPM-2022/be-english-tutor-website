import express from 'express';
import connectMongoDB from './database/mongo';
import startMiddleware from './start/middleware';
import startRoutes from './start/routes';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import startSocket from './start/socketIo';

// Environment variables
dotenv.config({ path: './src/api/v1/configs/.env' });

// Init Variables
const app = express();
const port = process.env.PORT || 5000;

//Cookie parser
app.use(cookieParser());

//Database
connectMongoDB();

// Middlewares
startMiddleware(app);

// Routes
startRoutes(app);

//socket.io
startSocket(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
