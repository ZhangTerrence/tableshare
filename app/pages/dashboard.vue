<script setup lang="ts">
definePageMeta({
  layout: "protected",
  middleware: ["auth"],
});
</script>

<template>
  <main>Hello, world.</main>
</template>
