export const OSupportedSql = {
  PSQL: "PostgresQL",
  MYSQL: "MySQL",
  SQLITE: "SQLite",
};

export type SupportedSql = (typeof OSupportedSql)[keyof typeof OSupportedSql];
