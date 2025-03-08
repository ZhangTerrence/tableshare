<script setup lang="ts"></script>

<template>
  <nav class="flex justify-between p-4">
    <ULink to="/">TableShare</ULink>
    <div class="flex gap-x-2">
      <ColorModeButton />
      <UButton to="/sign-in">Sign In</UButton>
      <UButton to="/sign-up">Sign Up</UButton>
    </div>
  </nav>
</template>
