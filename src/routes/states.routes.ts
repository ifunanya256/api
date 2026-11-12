import { createRouter } from "../utils/router";
import { StatesController } from "../controllers/states/states.controller";
import { createStatesDto } from "../dto/states/states.dto";
import { validateBody } from "../middleware/validation.middleware";
import { Router } from "express";

const router = createRouter();

const statesController = new StatesController();

router.post(
  "/",
  validateBody(createStatesDto),
  statesController.createState.bind(statesController),
);

router.get("/", statesController.getAllStates.bind(statesController))
// router.get("/single/:id", statesController.getSingleState.bind(statesController))
// router.delete("/:id", statesController.deleteSingleState.bind(statesController))

export default router;
