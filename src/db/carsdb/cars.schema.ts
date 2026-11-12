import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core"

export const carsTable = pgTable("cars", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    brand: varchar({ length: 15 }).notNull(),
    model: varchar({ length:10 }).notNull(),
    year: integer().notNull(),
    color: varchar({ length:20 }).notNull(),
    price: integer().notNull(),
    isAvailable: boolean().default(false),
    description: varchar({ length:200 }).notNull()
})