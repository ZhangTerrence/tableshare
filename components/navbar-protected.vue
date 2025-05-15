<script setup lang="ts">
const supabase = useSupabaseClient();
const toast = useToast();

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.add({
      title: error.name,
      description: error.message,
    });
  }

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

const user = useSupabaseUser();
</script>

<template>
  <nav class="flex justify-between border-b p-2">
    <UButton
      to="/dashboard"
      leading-icon="i-lucide-database-zap"
      variant="ghost"
      class="flex items-center hover:bg-primary"
    >
      TableShare
    </UButton>
    <div class="flex items-center gap-x-2">
      <DarkModeToggle />
      <RepoLink />
      <UDropdownMenu :items="items">
        <UButton icon="i-lucide-user" variant="outline">{{ user?.user_metadata["username"] }}</UButton>
      </UDropdownMenu>
    </div>
  </nav>
</template>
