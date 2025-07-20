import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const notes = pgTable("notes", {
	id: uuid().primaryKey().notNull(),
	title: text().notNull(),
	content: text().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }),
});
