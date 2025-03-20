<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

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
</script>

<template>
  <div>Hello, world.</div>
  <UButton @click="logout">Logout</UButton>
</template>
