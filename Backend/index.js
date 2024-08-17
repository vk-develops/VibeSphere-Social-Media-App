import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";
import accountRoute from "./Routes/accountRoute.js";
import "./Config/passportConfig.js";

//App init
connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

//Built-in Middlewares and Imported ones
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(passport.initialize());
// app.use(passport.session());

//Cloudinary init
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET_KEY,
});

//HTTP GET Method Test
app.get("/api/v1/", (req, res) => {
    res.status(200).json({ success: true, message: "HTTP Method Success!" });
});

//API's
app.use("/api/v1/users/auth", authRoute);
app.use("/api/v1/users/account", accountRoute);

//App listen
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});
