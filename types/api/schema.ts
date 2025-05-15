import type { SupportedSql } from "~/types/api/supportedSql";

export type Schema = {
  id: number;
  name: string;
  description: string;
  isPrivate: boolean;
  type: SupportedSql;
  sql: string;
  createdAt: Date;
  updatedAt: Date;
};
