import express from "express";
import {
    googleAuthCallback,
    isLoggedin,
    loginUser,
    logoutUser,
    registerUser,
} from "../Controllers/authController.js";
import { protect } from "../Middlewares/authMiddleware.js";

// router init
const router = express.Router();

// HTTP Methods
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.get("/isloggedin", protect, isLoggedin);

// Google OAuth
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/auth/google/callback", googleAuthCallback);

// Export
export default router;
