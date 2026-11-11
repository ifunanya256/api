import { createRouter } from "../utils/router";
import { CarsController } from "../controllers/cars/cars.controllers";
import { createCarsDto, updateCarsDto } from "../dto/cars/cars.dto";
import { validateBody } from "../middleware/validation.middleware";

const router = createRouter();

const carsController = new CarsController();

router.post(
  "/",
  validateBody(createCarsDto),
  carsController.createCars.bind(carsController),
);

router.get("/", carsController.getAllCars.bind(carsController));
router.get("/:id", carsController.getSingleCars.bind(carsController));
router.delete("/", carsController.deleteSingleCars.bind(carsController));
router.patch(
  "/:id",
  validateBody(updateCarsDto),
  carsController.updateSingleCars.bind(carsController),
);

export default router;
