<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import CodeEditor from "~/components/CodeEditor.vue";

definePageMeta({
  layout: "protected",
  middleware: ["auth"],
});
</script>

<template>
  <div class="grow">
    <SplitterGroup direction="horizontal">
      <SplitterPanel :default-size="30">
        <CodeEditor />
      </SplitterPanel>
      <SplitterResizeHandle class="border-r" />
      <SplitterPanel :default-size="70"></SplitterPanel>
    </SplitterGroup>
  </div>
</template>
