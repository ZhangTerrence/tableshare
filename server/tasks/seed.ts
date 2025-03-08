import { useDrizzle } from "~/server/utils/drizzle";

export default defineTask({
  meta: {
    name: "db:seed",
    description: "Run database seed task",
  },
  async run() {
    console.log("Running DB seed task...");
    const users = [
      {
        username: "John Doe",
        email: "john@example.com",
        password: "password123",
      },
      {
        username: "Jane Doe",
        email: "jane@example.com",
        password: "password123",
      },
    ];
    await useDrizzle().insert(tables.users).values(users);
    return { result: "success" };
  },
});
