import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core"

export const todoTable = pgTable("todo", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 100 }).notNull(),
    description: varchar({ length: 500 }).notNull(),
    isCompleted: boolean().default(false),
    comment: varchar({ length: 500 }),
})