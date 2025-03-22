import { z } from "zod";
import { serverSupabaseClient } from "#supabase/server";

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

  const supabase = await serverSupabaseClient(event);

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });

  if (error) {
    setResponseStatus(event, error.status);
    return error;
  }

  return setResponseStatus(event, 201);
});
