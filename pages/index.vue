<script setup lang="ts">
definePageMeta({
  layout: "unprotected",
});
</script>

<template>
  <main class="h-fit">
    <UContainer
      class="flex min-h-screen items-center max-lg:flex-col max-lg:justify-center max-lg:gap-y-[2rem] max-lg:py-24"
    >
      <div class="space-y-[2rem]">
        <h1 class="text-6xl max-md:text-4xl">
          <strong>Design and Share Database Schemas</strong>
        </h1>
        <div class="space-x-[1rem]">
          <UButton to="/register" color="neutral" size="xl" class="max-md:text-sm">Get Started</UButton>
          <UButton to="/browse" color="neutral" variant="outline" size="xl" class="max-md:text-sm">Browse</UButton>
        </div>
      </div>
    </UContainer>
    <UContainer class="min-h-screen py-24">Hello, world.</UContainer>
  </main>
</template>
