import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import connectMongoDB from "./database/mongo";
import startMiddleware from "./start/middleware";
import startRoutes from "./start/routes";

// Environment variables
dotenv.config({ path: "./src/api/v1/configs/.env" });

// Init Variables
const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
