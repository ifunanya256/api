import { Request, Response } from "express";
import { CreateTodoDTO, UpdateTodoDto } from "../../dto";
import { todoTable } from "../../db/schema";
import { db } from "../../config/db";

// TODO:
// 1. create a GET method and route to get all the todo list ✅
// 2. create a GET method to get a single todo value from our list ✅
// 3. create a DELETE method to remove a todo field from the todo list ✅
// 4. create a PATCH method to remove a todo field from the todo list ✅
// 5. update the createTodo method in the TodoController

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
			name: "go to school",
			description: "today i need to go to school to learn backend development",
			isCompleted: false,
		},
		{
			id: 2,
			name: "go to the market",
			description: "i need to go buy foodstuffs... it is urgent",
			isCompleted: true,
			comment: "omo today market was hectic",
		},
		{
			id: 3,
			name: "cook",
			description: "i need to cook for the family",
			isCompleted: false,
		},
	];

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

	getAllTodo(_req: Request, _res: Response) {
		// logic to query database

		const total = this.todoList.length;

		return {
			total,
			data: this.todoList,
		};
	}

	getSingleTodo(req: Request, _res: Response) {
		// get params
		const { id } = req.params;
		const numberedId = Number(id);

		// logic to get data from the array

		const todo = this.todoList.filter((todo) => todo.id === numberedId);

		return {
			message: todo.length > 0 ? "todo found" : "check the id passed",
			data: todo[0],
		};
	}

	deleteSingleTodo(req: Request, _res: Response) {
		const { id } = req.params;
		const numberedId = Number(id);

		// logic to delete from database

		const todo = this.todoList.find((todo) => {
			return todo.id === numberedId;
		});

		if (!todo) {
			return {
				message: `couldn't find todo with id: ${id}`,
			};
		}

		const updatedTodo = this.todoList.filter((todo) => {
			return todo.id != numberedId;
		});

		return {
			message: "todo deleted",
			data: updatedTodo,
		};
	}

	updateSingleTodo(req: Request, _res: Response) {
		const { id } = req.params;
		const numberedId = Number(id);

		const reqBody = req.body as UpdateTodoDto;

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
			message: "update completed",
			data: todo,
		};
	}
}
