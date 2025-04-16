<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import type { AST } from "node-sql-parser";

definePageMeta({
  layout: "protected",
  middleware: ["auth"],
});

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      console.log("saved");
    }
  });
});

const ast = ref<AST[]>([]);
</script>

<template>
  <main class="grow overflow-y-scroll">
    <SplitterGroup direction="horizontal">
      <SplitterPanel :default-size="40" class="flex overflow-y-scroll">
        <CodeEditor @update-ast="(updatedAst) => (ast = updatedAst)" />
      </SplitterPanel>
      <SplitterResizeHandle class="border-r" />
      <SplitterPanel :default-size="60">Hello world.</SplitterPanel>
    </SplitterGroup>
  </main>
</template>
