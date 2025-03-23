<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";

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
</script>

<template>
  <main class="grow overflow-y-scroll">
    <SplitterGroup direction="horizontal">
      <SplitterPanel :default-size="40" class="flex overflow-y-scroll">
        <CodeEditor />
      </SplitterPanel>
      <SplitterResizeHandle class="border-r" />
      <SplitterPanel :default-size="60">Hello world.</SplitterPanel>
    </SplitterGroup>
  </main>
</template>
