import { z } from "zod";

export const createTodoDto = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.max(255, "Title must not be more than 255 words"),
	description: z.string().min(1, "Description is required"),
	isCompleted: z.boolean().default(false),
});

export type CreateTodoDTO = z.infer<typeof createTodoDto>;
