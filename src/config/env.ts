import "dotenv/config";
import { z } from "zod";

const schema = z.object({
	PORT: z.coerce.number().default(3000),
	DATABASE_URL: z.string(),
	JWT_SECRET: z.string().min(16),
});

export const env = schema.parse(process.env);
