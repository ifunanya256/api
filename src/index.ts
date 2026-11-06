import express from "express";
import cors from "express";
import helmet from "express";

import { env } from "./config/env";
import { connectDb } from "./config/db";
// import { swagger } from "./config/swagger";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);

async function start() {
  await connectDb();
  app.listen(env.PORT, () => {
    console.log(`Server running on http://localhost:${env.PORT}/api/v1`);
    console.log(`Swagger docs on http://localhost${env.PORT}/docs`);
  });
}

start().catch((err) => {
  console.error("Failed to start, err");
  process.exit(1);
});
