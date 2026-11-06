import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env";
import { connectDb } from "./config/db";
// import { setupSwagger } from "./config/swagger";
import routes from "./routes";

const app = express();

app.use(helmet()); // security headers
app.use(cors()); // allow browsers from other origins
app.use(express.json()); // parse JSON request bodies

// setupSwagger(app);
app.use("/api/v1", routes);

async function start() {
	await connectDb();
	app.listen(env.PORT, () => {
		console.log(`Server running on http://localhost:${env.PORT}`);
		console.log(`Swagger docs on http://localhost:${env.PORT}/docs`);
	});
}

start().catch((err) => {
	console.error("Failed to start", err);
	process.exit(1);
});
