<script setup lang="ts">
import DarkModeToggle from "~/components/DarkModeToggle.vue";

const { user, clear: clearSession } = useUserSession();

async function logout() {
  await clearSession();
  await navigateTo("/login");
}

const items = ref([
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      onSelect(e: Event) {
        e.preventDefault();
        logout();
      },
    },
  ],
]);
</script>

<template>
  <nav class="flex w-screen justify-between border-b p-2">
    <UButton to="/dashboard" leading-icon="i-lucide-database-zap" variant="link" size="xl" class="flex items-center">
      TableShare
    </UButton>
    <div class="flex items-center gap-x-2">
      <DarkModeToggle />
      <RepoLink />
      <UDropdownMenu :items="items">
        <UButton icon="i-lucide-user" variant="outline">{{ user?.username }}</UButton>
      </UDropdownMenu>
    </div>
  </nav>
</template>
