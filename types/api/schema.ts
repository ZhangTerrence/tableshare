export enum SqlType {
  PSQL,
  MYSQL,
  SQLITE,
}

export interface Schema {
  id: number;
  name: string;
  description: string;
  isPrivate: boolean;
  type: SqlType;
  sql: string;
  createdAt: Date;
  updatedAt: Date;
}
