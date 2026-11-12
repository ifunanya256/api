import { createRouter } from "../utils/router";
import { TodoController } from "../controllers/todo/todo.controller";
import { createTodoDto, updateToDoDto } from "../dto";
import { validateBody } from "../middleware/validation.middleware";

const router = createRouter();

const todoController = new TodoController();

router.post(
  "/",
  validateBody(createTodoDto),
  todoController.createTodo.bind(todoController),
);

router.get("/", todoController.getAllToDo.bind(todoController));
router.get("/:id", todoController.getSingleToDo.bind(todoController));
// router.delete("/:id", todoController.deleteSingleToDo.bind(todoController));
// router.patch(
//   "/:id",
//   validateBody(updateToDoDto),
//   todoController.updateSingleToDo.bind(todoController),
// );

export default router;
