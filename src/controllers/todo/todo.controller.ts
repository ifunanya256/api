import { Request, Response } from "express";
import { CreateTodoDTO, UpdateTodoDto } from "../../dto";
import { todoTable } from "../../db/todo.schema";
import { db } from "../../config/db";
import { count, eq } from "drizzle-orm";

// TODO:
// 1. create a GET method and route to get all the todo list ✅
// 2. create a GET method to get a single todo value from our list ✅
// 3. create a DELETE method to remove a todo field from the todo list
// 4. create a PATCH method to remove a todo field from the todo list
// 5. update the createTodo method in the TodoController

interface Todo {
	id: number;
	name: string;
	description: string;
	isCompleted: boolean;
	comment?: string;
}

export class TodoController {
	async createTodo(req: Request, _res: Response) {
		const requestBody = req.body as CreateTodoDTO;

		const todoInsert: typeof todoTable.$inferInsert = {
			name: requestBody.name,
			description: requestBody.description,
			isCompleted: requestBody.isCompleted,
		};

		await db.insert(todoTable).values(todoInsert);

		return {
			message: "New todo record created!",
			data: todoInsert,
		};
	}

	async getAllTodo(_req: Request, _res: Response) {
		const todos = await db.select().from(todoTable);
		const total = await db.select({ count: count() }).from(todoTable);

		return {
			message: "response successful",
			data: todos,
			total: total[0].count,
		};
	}

	async getSingleTodo(req: Request, _res: Response) {
		const { id } = req.params;

		const todo = await db
			.select()
			.from(todoTable)
			.where(eq(todoTable.id, id.toString()));

		return {
			message: `todo for id:${id} retrieved`,
			data: todo[0],
		};
	}

	async updateSingleTodo(req: Request, _res: Response) {
		const { id } = req.params;

		const updateBody = req.body as UpdateTodoDto;

		const updatedTodo = await db
			.update(todoTable)
			.set({
				name: updateBody.name,
				description: updateBody.description,
				comment: updateBody.comment,
				isCompleted: updateBody.isCompleted,
			})
			.where(eq(todoTable.id, id.toString()))
			// .returning({
			// 	id: todoTable.id,
			// 	name: todoTable.name,
			// 	description: todoTable.description,
			// 	comment: todoTable.comment,
			// 	isCompleted: todoTable.isCompleted,
			// });
			.returning();

		return {
			message: "update was successful",
			data: updatedTodo[0],
		};
	}

	async deleteSingleTodo(req: Request, _res: Response) {
		const { id } = req.params;

		await db.delete(todoTable).where(eq(todoTable.id, id.toString()));

		return {
			message: "todo value deleted successfully",
		};
	}
}
