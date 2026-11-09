import { Request, Response } from "express";
import { UpdateToDoDto } from "../../dto";

interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  comment?: string;
}

export class TodoController {
  private todoList: Todo[] = [
    {
      id: 1,
      name: "Go to the market",
      description: "Buy the needful things missing",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Wash the dirty cloths",
      description: "Place the cloths in the washing machine",
      isCompleted: true,
      comment: "I was able to wash all the cloths ",
    },
    {
      id: 3,
      name: "Prepare food",
      description: "Get the food ready before 3",
      isCompleted: true,
      comment: "It tasted so sweet",
    },
  ];

  createTodo(req: Request, res: Response) {}

  getAllToDo(req: Request, res: Response) {
    const total = this.todoList.length;

    return {
      total,
      data: this.todoList,
    };
  }

  getSingleToDo(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);

    const todo = this.todoList.filter((todo) => todo.id === numberId);

    return {
      message: todo.length > 0 ? "todo found" : "check the id passed",
      data: todo[0],
    };
  }

  deleteSingleToDo(req: Request, res: Response) {
    const { id } = req.params;
    const numberedId = Number(id);

    const todo = this.todoList.find((todo) => {
      return todo.id === numberedId;
    });

    if (!todo) {
      return {
        message: `Couldn't find todo with id: ${id}`,
      };
    }

    const updatedTodo = this.todoList.filter((todo) => {
      return todo.id != numberedId;
    });

    return updatedTodo;
  }

  updateSingleToDo(req: Request, res: Response) {
    const { id } = req.params;
    const numberedId = Number(id);

    const reqBody = req.body as UpdateToDoDto;

    const todo = this.todoList.find((todo) => {
      return todo.id === numberedId;
    });

    if (!todo) {
      return {
        message: `couldn't find todo with id: ${id}`,
      };
    }

    if (reqBody.comment) {
      todo.comment = reqBody.comment;
    }

    if (reqBody.name) {
      todo.name = reqBody.name;
    }

    if (reqBody.description) {
      todo.description = reqBody.description;
    }

    if (reqBody.isCompleted != undefined) {
      todo.isCompleted = reqBody.isCompleted;
    }

    return {
      message: "Update completed",
      data: todo,
    };
  }
}
