import express from "express";
import { 
  checkAuth, 
  login, 
  logout, 
  signup, 
  updateProfile 
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", protectRoute, logout); // Protect logout route

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth); // Ensures auth status

export default router;
