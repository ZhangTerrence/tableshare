<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <Navbar />
    <slot />
  </div>
</template>
