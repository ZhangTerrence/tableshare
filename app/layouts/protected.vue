<script setup lang="ts">
import ProtectedNavbar from "~/components/ProtectedNavbar.vue";
</script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <ProtectedNavbar />
    <slot />
  </div>
</template>
