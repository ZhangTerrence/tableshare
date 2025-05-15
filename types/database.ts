export type Column = {
  id: string;
  name: string;
  type: string;
};

export type Table = {
  id: string;
  name: string;
  columns: Column[];
};

export type Database = Table[];
