import { z } from "zod";

export const createTodoDto = z.object({
	name: z
		.string()
		.min(1, "Title is required")
		.max(255, "Title must not be more than 255 words"),
	description: z.string().min(1, "Description is required"),
	isCompleted: z.boolean().optional().default(false),
});

export type CreateTodoDTO = z.infer<typeof createTodoDto>;

export const updateTodoDto = z.object({
	name: z
		.string()
		.min(1, "Title is required")
		.max(255, "Title must not be more than 255 words")
		.optional(),
	description: z.string().min(1, "Description is required").optional(),
	isCompleted: z.boolean().optional(),
	comment: z.string().optional(),
});

export type UpdateTodoDto = z.infer<typeof updateTodoDto>;
