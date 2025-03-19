export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");

  const drizzle = useDrizzle();
  const users = await drizzle.selectDistinct().from(tables.users).where(eq(tables.users.id, userId));
  const user = users[0];

  if (!user) {
    setResponseStatus(event, 404);
    return {
      message: "User not found.",
    };
  }

  const schemas = await drizzle.select().from(tables.schemas).where(eq(tables.schemas.authorId, user.id));
  setResponseStatus(event, 200);
  return schemas;
});
