<template>
  <nav class="flex w-screen justify-between border-b p-2">
    <UButton to="/" leading-icon="i-lucide-database-zap" variant="ghost" class="flex items-center hover:bg-primary">
      TableShare
    </UButton>
    <div class="flex gap-x-2 overflow-x-clip">
      <DarkModeToggle />
      <RepoLink />
      <div class="flex">
        <UButton to="/login" variant="ghost" class="hover:underline hover:bg-primary">Login</UButton>
        <UButton to="/register" variant="ghost" class="hover:underline hover:bg-primary">Register</UButton>
      </div>
    </div>
  </nav>
</template>
