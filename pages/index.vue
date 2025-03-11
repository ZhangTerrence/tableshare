<script setup lang="ts">
definePageMeta({
  layout: "unprotected",
});
</script>

<template>
  <main class="h-fit">
    <UContainer class="flex min-h-screen items-center max-lg:flex-col max-lg:justify-center max-lg:py-24">
      <div class="space-y-4">
        <h1 class="text-6xl max-md:text-4xl">
          <strong>Design and Share Database Schemas</strong>
        </h1>
        <div class="space-x-4">
          <UButton to="/register" size="xl" class="max-md:text-sm">Get Started</UButton>
          <UButton to="/browse" variant="outline" size="xl" class="max-md:text-sm">Browse</UButton>
        </div>
      </div>
      <NuxtImg src="/images/TableShare.svg" alt="TableShare Illustration" />
    </UContainer>
    <UContainer class="flex min-h-screen"></UContainer>
  </main>
</template>
