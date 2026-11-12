import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "./env";

const pool = new Pool({ connectionString: env.DATABASE_URL });

export async function connectDb() {
	const client = await pool.connect();
	await client.query("SELECT 1");
	client.release();
	console.log("Database connected");
}

export const db = drizzle(env.DATABASE_URL);
