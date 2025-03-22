import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) {
    return setResponseStatus(event, 403);
  }

  const supabase = await serverSupabaseClient(event);
  const { data: schemas } = await supabase.from("schemas").select().eq("author_id", user.id);
  return {
    schemas: schemas ?? [],
  };
});
