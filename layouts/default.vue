<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div class="w-screen h-screen">
    <Navbar />
    <slot />
  </div>
</template>
