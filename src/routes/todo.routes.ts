import { createRouter } from "../utils/router";
import { TodoController } from "../controllers/todo/todo.controller";
import { createTodoDto } from "../dto";
import { validateBody } from "../middleware/validation.middleware";

// const router = Router()
const router = createRouter();

const todoController = new TodoController();

router.post(
	"/",
	validateBody(createTodoDto),
	todoController.createTodo.bind(todoController),
);

export default router;
