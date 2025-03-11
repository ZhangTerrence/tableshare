<script setup lang="ts"></script>

<template>
  <nav class="fixed top-0 flex w-screen justify-between border-b p-2">
    <UButton to="/" variant="link" size="xl" class="flex items-center">
      <template #leading>
        <UIcon name="i-lucide-database-zap" />
      </template>
      TableShare
    </UButton>
    <div class="flex gap-x-2 overflow-x-clip">
      <DarkModeToggle />
      <div class="flex">
        <UButton to="/login" variant="link" size="xl">Login</UButton>
        <UButton to="/register" variant="link" size="xl">Register</UButton>
      </div>
    </div>
  </nav>
</template>
