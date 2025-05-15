import type { Node } from "@vue-flow/core";
import type { AST } from "node-sql-parser";

export interface CustomNodeData {
  ast: AST[];
}

export interface CustomNodeEvents {
  onCustomEvent: (event: MouseEvent) => void;
}

export type CustomNodeTypes = "table";

export type CustomNode = Node<CustomNodeData, CustomNodeEvents, CustomNodeTypes>;
