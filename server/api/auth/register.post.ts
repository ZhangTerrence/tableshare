import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]*.{3,31}$/, "The user's username must have between 3 and 31 alphanumeric characters."),
  email: z.string().email("The user's email is invalid."),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-._@+]).*.{8,}$/,
      "The user's password must have at least 8 characters with least one number, one lowercase letter, one upper case letter, one special character.",
    ),
});

export default defineEventHandler(async (event) => {
  const { username, email, password } = await readValidatedBody(event, schema.parseAsync);
  const hashedPassword = await hashPassword(password);

  const drizzle = useDrizzle();
  const users = await drizzle
    .insert(tables.users)
    .values({
      username: username,
      email: email,
      password: hashedPassword,
    })
    .returning();
  const user = users[0];

  await setUserSession(event, {
    user: {
      id: user.id,
      username: user.username,
    },
    loggedInAt: new Date(),
  });

  return setResponseStatus(event, 201);
});
