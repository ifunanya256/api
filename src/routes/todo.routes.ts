import { TodoController } from "../controllers/todo/todo.controller";
import { createTodoDto } from "../dto";
import { validateBody } from "../middleware/validation.middleware";
import { createRouter } from "../utils/router";

// const router = Router()
const router = createRouter();

const todoController = new TodoController();

router.post(
  "/",
  validateBody(createTodoDto),
  todoController.createTodo.bind(todoController),
);

export default router;
