"use server";

import { db } from "@/drizzle/db";
import { chat, message } from "@/drizzle/schema";

export const insertChatAndMessages = async (chatId: string) => {
  await db
    .insert(chat)
    .values({
      id: chatId,
      userId: "philip",
    })
    .onConflictDoNothing();

  await db.insert(message).values({
    chatId,
    content: "Hello",
    role: "USER",
  });
};
