<script setup lang="ts">
import UnprotectedNavbar from "~/components/UnprotectedNavbar.vue";
</script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <UnprotectedNavbar />
    <slot />
  </div>
</template>
