import express from "express";
import connectMongoDB from "./database/mongo";
import startMiddleware from "./start/middleware";
import startRoutes from "./start/routes";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import startSocket from "./start/socketIo";
import { createServer } from "http";
import main from "./grpc/grpc_server";

// Environment variables
dotenv.config({ path: "./src/api/v1/configs/.env" });

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

main();

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
