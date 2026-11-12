import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core";
import { StatesController } from "../controllers/states/states.controller";

export const statesTable = pgTable("states", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 10 }).notNull(),
  capital: varchar({ length: 15 }).notNull(),
  geopoliticalZone: varchar({ length: 20 }).notNull(),
});
