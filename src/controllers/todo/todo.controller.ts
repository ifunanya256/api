import { Request, Response } from "express";
import { CreateTodoDTO, UpdateToDoDto } from "../../dto";
import { todoTable } from "../../db/schema";
import { db } from "../../config/db";
import { count, eq } from "drizzle-orm";

interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  comment?: string;
}

export class TodoController {
  async createTodo(req: Request, res: Response) {
    const requestBody = req.body as CreateTodoDTO;

    const todoInsert: typeof todoTable.$inferInsert = {
      name: requestBody.name,
      description: requestBody.description,
      isCompleted: requestBody.isCompleted,
    };

    await db.insert(todoTable).values(todoInsert);

    return {
      message: "New todo record created!!!!",
      data: todoInsert,
    };
  }

  async getAllToDo(req: Request, res: Response) {
    const todos = await db.select().from(todoTable);
    const total = await db.select({ count: count() }).from(todoTable);

    return {
      message: "response successful",
      data: todos,
      total: total[0].count,
    };
  }

  async getSingleToDo(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);

    const todo = await db
      .select()
      .from(todoTable)
      .where(eq(todoTable.id, numberId));

    return {
      message: `todo for id:${id} retrieved`,
      data: todo[0],
    };
  }
}
