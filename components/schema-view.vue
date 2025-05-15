<script setup lang="ts">
import { type Edge, type Node, VueFlow } from "@vue-flow/core";

const nodes = ref<Node[]>([
  {
    id: "node-1",
    position: { x: 150, y: 100 },
    label: "Start Node",
    type: "default",
    data: { label: "Start Node" },
  },
  {
    id: "node-2",
    position: { x: 300, y: 200 },
    label: "Approval Node",
    type: "default",
    data: { est: "Approval Node" },
  },
  {
    id: "node-3",
    position: { x: 450, y: 100 },
    label: "End Node",
    type: "default",
    data: { label: "End Node" },
  },
]);

const edges = ref<Edge[]>([
  { id: "e1-2", source: "node-1", target: "node-2" },
  { id: "e2-3", source: "node-2", target: "node-3" },
]);
</script>

<template>
  <ClientOnly>
    <VueFlow :nodes="nodes" :edges="edges" :vueFlowProps="{ fitView: true }" />
  </ClientOnly>
</template>
