import { useDrizzle } from "~/server/utils/database";

export default defineTask({
  meta: {
    name: "db:seed",
    description: "Run database seed task.",
  },
  async run() {
    console.log("Running database seed task...");
    const users = [
      {
        username: "John Doe",
        email: "john@example.com",
        password: "@Password123",
      },
      {
        username: "Jane Doe",
        email: "jane@example.com",
        password: "@Password123",
      },
    ];
    await useDrizzle().insert(tables.users).values(users);
    return { result: "success", users };
  },
});
