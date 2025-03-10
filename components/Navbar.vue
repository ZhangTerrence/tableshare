<script setup lang="ts"></script>

<template>
  <nav class="flex justify-between p-2 border-b">
    <UButton to="/landing" variant="link" size="xl" class="flex items-center">
      <template #leading>
        <UIcon name="i-lucide-database-zap" />
      </template>
      TableShare
    </UButton>
    <div class="flex gap-x-2">
      <DarkModeToggle />
      <UButton to="/login" variant="link" class="">Login</UButton>
      <UButton to="/register" variant="link" class="">Register</UButton>
    </div>
  </nav>
</template>
