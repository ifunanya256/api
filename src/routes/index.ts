import { Router } from "express";
import { healthCheck } from "../controllers";

const router = Router();

router.get("/healthz", healthCheck);

export default router;
