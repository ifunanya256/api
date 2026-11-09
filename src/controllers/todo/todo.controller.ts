import { Request, Response } from "express";

export class TodoController {
	createTodo(req: Request, res: Response) {
		const requestBody = req.body;
		// const param = req.params;
		// const query = req.query;

		return {
			message: "completed",
			todo: requestBody,
		};
	}
}
