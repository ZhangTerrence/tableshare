<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import type { Database } from "~/types/database";

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

const schema = ref<Database>([]);
</script>

<template>
  <main class="grow overflow-y-scroll">
    <SplitterGroup direction="horizontal">
      <SplitterPanel :default-size="40" class="flex overflow-y-scroll">
        <CodeEditor @update-schema="(updatedSchema) => (schema = updatedSchema)" />
      </SplitterPanel>
      <SplitterResizeHandle class="border-r" />
      <SplitterPanel :default-size="60">
        <SchemaView :schema="schema" />
      </SplitterPanel>
    </SplitterGroup>
  </main>
</template>
