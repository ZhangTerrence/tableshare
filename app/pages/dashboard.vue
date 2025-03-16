<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";

definePageMeta({
  layout: "protected",
  middleware: ["auth"],
});
</script>

<template>
  <div class="grow">
    <SplitterGroup direction="horizontal">
      <SplitterPanel :min-size="15" :max-size="25" :default-size="20">
        <DashboardSidebar />
      </SplitterPanel>
      <SplitterResizeHandle class="border-r" />
      <SplitterPanel :default-size="80">
        <Dashboard />
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
