import { config } from "dotenv";
import { z } from "zod";

config();

const schema = z.object ({
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string().min(16),
    NODE_ENV: z.string().default("development")
})

export const env = schema.parse(process.env); 
