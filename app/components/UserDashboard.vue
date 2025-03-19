<script setup lang="ts">
const { user } = useUserSession();
const { data: schemas } = await useFetch(`/api/schemas/${user.value!.id}`);
</script>

<template>
  <main class="flex h-full w-full flex-col space-y-2 p-2">
    <h2 class="text-xl"><strong>Schemas</strong></h2>
    <div class="grid grow grid-cols-5 gap-2">
      <div v-for="schema in schemas" :key="schema.id">{{ schema.name }}</div>
      <UButton
        to="/create"
        icon="i-lucide-plus"
        variant="outline"
        size="xl"
        class="flex aspect-square items-center justify-center"
      />
    </div>
  </main>
</template>
