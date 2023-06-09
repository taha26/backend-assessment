import { Router } from "express";
import { Product } from "../controllers/product.mjs";
import { authenticateToken } from "../middleware.mjs";

const router = Router();

router.use(authenticateToken)
router.get('/',Product);

export default router;