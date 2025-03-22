<script setup lang="ts">
definePageMeta({
  layout: "protected",
  middleware: ["auth"],
});
</script>

<template>
  <div>Hello, world.</div>
</template>
