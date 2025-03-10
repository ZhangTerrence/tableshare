<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <Navbar />
    <slot />
  </div>
</template>
