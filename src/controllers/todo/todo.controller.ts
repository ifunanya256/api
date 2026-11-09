import { Request, Response } from "express";

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

	createTodo(req: Request, _res: Response) {
		const requestBody = req.body;

		return {
			message: "completed",
			todo: requestBody,
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

	getSingleTodo(req: Request, res: Response) {
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
}
