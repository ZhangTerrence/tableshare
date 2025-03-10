import { z } from "zod";
import { setUserSession } from "#imports";

const schema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]*.{3,31}$/, "The user's username must have between 3 and 31 alphanumeric characters."),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-._@+]).*.{8,}$/,
      "The user's password must have at least 8 characters with least one number, one lowercase letter, one upper case letter, one special character.",
    ),
});

export default defineEventHandler(async (event) => {
  const { username, password } = await readValidatedBody(event, schema.parseAsync);

  const drizzle = useDrizzle();
  const users = await drizzle.selectDistinct().from(tables.users).where(eq(tables.users.username, username));
  const user = users[0];

  if (!user) {
    setResponseStatus(event, 404);
    return {
      message: "User not found.",
    };
  }

  if (!(await verifyPassword(user.password, password))) {
    setResponseStatus(event, 403);
    return {
      message: "Invalid username or password.",
    };
  }

  await setUserSession(event, {
    user: {
      username: user.username,
    },
    loggedInAt: new Date(),
  });

  return setResponseStatus(event, 204);
});
