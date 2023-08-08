import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const chat = pgTable("chat", {
  id: varchar("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const chatEnum = pgEnum("role", ["USER", "SYSTEM", "ASSISTANT"]);

export const message = pgTable("message", {
  id: serial("id").primaryKey(),
  chatId: varchar("chat_id").notNull(),
  content: text("content").notNull(),
  role: chatEnum("role").notNull().default("USER"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
