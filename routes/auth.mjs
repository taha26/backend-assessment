import { Router } from "express";
import { Signup, Login, Token } from "../controllers/auth.mjs";
import { limit } from "../middleware.mjs";

const router = Router();

router.post("/signup", Signup);
router.post("/refresh-token", Token);

router.use(limit)
router.post("/login", Login);

export default router;