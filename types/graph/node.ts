import type { Node } from "@vue-flow/core";
import type { Table } from "~/types/database";

export type CustomNodeData = {
  table: Table;
};

export type CustomNode = Node<
  CustomNodeData,
  {
    hello: (event: MouseEvent) => void;
  },
  "table"
>;
