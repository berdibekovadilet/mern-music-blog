import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";

const router = new Router();

// Register
// http://localhost:8000/api/auth/register
router.post("/register", register);

// Login
// http://localhost:8000/api/auth/login
router.post("/login", login);

// Get Me
// http://localhost:8000/api/auth/me
router.get("/me", getMe);

export default router;
