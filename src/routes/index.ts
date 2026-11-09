import { Router } from "express";
import { healthCheck } from "../controllers";
import authRoutes from "./auth.routes";
import todoRoutes from "./todo.routes";

const router = Router();

router.get("/health", healthCheck);

router.use("/auth", authRoutes);
router.use("/todo", todoRoutes);

export default router;
