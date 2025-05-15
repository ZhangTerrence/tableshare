<script setup lang="ts">
import { VueFlow } from "@vue-flow/core";
import type { Database } from "~/types/database";
import { v4 as uuid } from "uuid";
import type { CustomNode } from "~/types/graph/node";

const props = defineProps<{
  schema: Database;
}>();

const nodes = computed<CustomNode[]>(() => {
  return props.schema.map((table) => {
    return {
      id: uuid(),
      position: { x: 300, y: 300 },
      label: table.name,
      type: "table",
      data: {
        table: table,
      },
    };
  });
});
</script>

<template>
  <ClientOnly>
    <VueFlow :nodes="nodes" :vue-flow-props="{ fitView: true }">
      <template #node-table="props">
        <TableNode :table="props.data.table" />
      </template>
    </VueFlow>
  </ClientOnly>
</template>
