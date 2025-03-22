import { z } from "zod";
import { serverSupabaseClient } from "#supabase/server";

const schema = z.object({
  email: z.string().email("The user's email is invalid."),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-._@+]).*.{8,}$/,
      "The user's password must have at least 8 characters with least one number, one lowercase letter, one upper case letter, one special character.",
    ),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, schema.parseAsync);

  const supabase = await serverSupabaseClient(event);

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    setResponseStatus(event, error.status);
    return {
      title: "Login Error",
      description: error.message,
    };
  }

  return setResponseStatus(event, 201);
});
