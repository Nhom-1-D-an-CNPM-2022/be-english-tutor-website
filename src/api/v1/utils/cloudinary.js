import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
// Environment variables
dotenv.config({ path: "./src/api/v1/configs/.env" });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
