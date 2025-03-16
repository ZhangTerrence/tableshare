<script setup lang="ts">
const items = ref([
  {
    label: "app/",
    defaultExpanded: true,
    children: [
      {
        label: "composables/",
        children: [
          {
            label: "useAuth.ts",
            icon: "i-vscode-icons-file-type-typescript",
          },
          {
            label: "useUser.ts",
            icon: "i-vscode-icons-file-type-typescript",
          },
        ],
      },
      {
        label: "components/",
        defaultExpanded: true,
        children: [
          {
            label: "Card.vue",
            icon: "i-vscode-icons-file-type-vue",
          },
          {
            label: "Button.vue",
            icon: "i-vscode-icons-file-type-vue",
          },
        ],
      },
    ],
  },
  {
    label: "app.vue",
    icon: "i-vscode-icons-file-type-vue",
  },
  {
    label: "nuxt.config.ts",
    icon: "i-vscode-icons-file-type-nuxt",
  },
]);
</script>

<template>
  <nav class="flex h-full w-full flex-col p-2">
    <UTree :items="items" />
    <UButton to="/browse" variant="outline" size="lg" class="mt-auto">Browse</UButton>
  </nav>
</template>
