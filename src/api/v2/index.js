import express from 'express';
import connectMongoDB from './infrac/database/index';
import startMiddleware from './interfaces/start/middleware';
import startRoutes from './interfaces/start/routes';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import startSocket from './interfaces/start/socketIo';
import {createServer} from 'http';

// Environment variables
dotenv.config({ path: "./src/api/v2/configs/.env" });

// Init Variables
const app = express();
const port = process.env.PORT || 5000;
const server = createServer(app);

// Limit size
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Cookie parser
app.use(cookieParser());

//Database
connectMongoDB();

// Middlewares
startMiddleware(app);

// Routes
startRoutes(app);

//socket.io
startSocket(server);

//server.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`);
//});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
