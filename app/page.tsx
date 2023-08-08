import { db } from "@/drizzle/db";
import Button from "./button";
import { genId } from "./genId";
import { insertChatAndMessages } from "./insertChatAndMessages";
import { chat } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  const id = genId();
  const chats = await db.select().from(chat).where(eq(chat.userId, "philip"));
  return (
    <main>
      <form
        action={async (formData) => {
          "use server";
          await insertChatAndMessages(id);
        }}
      >
        <Button />
      </form>
      {chats.map((chat) => (
        <div key={chat.id}>
          <h1>{chat.id}</h1>
          <h2>{chat.userId}</h2>
          <h3>{chat.createdAt.toDateString()}</h3>
        </div>
      ))}
    </main>
  );
}
