<script setup lang="ts">
import DarkModeToggle from "~/components/DarkModeToggle.vue";
</script>

<template>
  <nav class="fixed top-0 flex w-screen justify-between border-b p-2">
    <UButton to="/" leading-icon="i-lucide-database-zap" variant="link" size="xl" class="flex items-center">
      TableShare
    </UButton>
    <div class="flex gap-x-2 overflow-x-clip">
      <DarkModeToggle />
      <RepoLink />
      <div class="flex">
        <UButton to="/login" variant="link" size="xl" class="hover:underline">Login</UButton>
        <UButton to="/register" variant="link" size="xl" class="hover:underline">Register</UButton>
      </div>
    </div>
  </nav>
</template>
