<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";

definePageMeta({
  layout: "protected",
  middleware: ["auth"],
});

const layout = useCookie<number[]>("splitter:layout");
</script>

<template>
  <div class="grow">
    <SplitterGroup direction="horizontal" @layout="layout = $event">
      <SplitterPanel :min-size="15" :max-size="25" :default-size="layout[0] ?? 20">
        <DashboardSidebar />
      </SplitterPanel>
      <SplitterResizeHandle class="border-r" />
      <SplitterPanel :default-size="layout[1] ?? 80">
        <Dashboard />
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
