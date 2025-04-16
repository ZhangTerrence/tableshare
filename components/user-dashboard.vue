<script setup lang="ts">
import type { Schema } from "~/types/api/schema";

const { data: schemas } = useFetch<Schema[], {}>("/api/schemas");
</script>

<template>
  <main class="flex h-full w-full flex-col space-y-2 p-2">
    <div class="flex justify-between">
      <h2 class="text-xl"><strong>Schemas</strong></h2>
      <UButton to="/create" icon="i-lucide-plus" />
    </div>
    <div class="grid grow grid-cols-5 gap-2">
      <div v-for="schema in schemas" :key="schema.id">
        {{ schema.name }}
      </div>
    </div>
  </main>
</template>
