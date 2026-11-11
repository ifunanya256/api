import { Router } from "express";
import { healthCheck } from "../controllers";
import authRoutes from "./auth.routes";
import carsRoutes from "./cars.routes";

const router = Router();

router.get("/health", healthCheck);

router.use("/auth", authRoutes);
router.use("/cars", carsRoutes);

export default router;
