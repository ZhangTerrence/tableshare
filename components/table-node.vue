<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";

export type TableNodeProps = {
  table: {
    id: string;
    name: string;
    columns: {
      id: string;
      name: string;
      type: string;
    }[];
  };
};

const props = defineProps<TableNodeProps>();

console.log("Table Node: ", props.table);
</script>

<template>
  <div>
    <span class="border border-black p-4">{{ props.table.name }}</span>
    <div v-for="column in props.table.columns" :key="column.id">
      <Handle type="source" :position="Position.Left" />
      <span>{{ column.name }}</span>
      <Handle type="source" :position="Position.Right" />
    </div>
  </div>
</template>

<style scoped></style>
