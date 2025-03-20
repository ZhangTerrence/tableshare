<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "unprotected",
});

const schema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]*.{3,31}$/, "The user's username must have between 3 and 31 alphanumeric characters."),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-._@+]).*.{8,}$/,
      "The user's password must have at least 8 characters with least one number, one lowercase letter, one upper case letter, one special character.",
    ),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  username: undefined,
  password: undefined,
});

// const { fetch: refreshSession } = useUserSession();
const toast = useToast();

async function login(event: FormSubmitEvent<Schema>) {
  await useFetch("/api/auth/login", {
    method: "POST",
    body: {
      username: event.data.username,
      password: event.data.password,
    },
    async onResponse({ response }) {
      if (response.ok) {
        await navigateTo("/dashboard");
      } else {
        toast.add({
          title: "Error logging in.",
          description: response._data.message,
        });
      }
    },
  });
}
</script>

<template>
  <main class="grow py-28">
    <UContainer>
      <div class="flex flex-col gap-y-[1rem]">
        <h1 class="text-4xl leading-tight">
          <strong>Login</strong>
        </h1>
        <USeparator />
        <UForm :schema="schema" :state="state" @submit="login" class="space-y-[2rem]">
          <UFormField label="Username" name="username" :required="true" size="lg" class="space-y-[1rem]">
            <UInput v-model="state.username" placeholder="JohnDoe" class="w-full" />
          </UFormField>

          <UFormField label="Password" name="password" :required="true" size="lg" class="space-y-[1rem]">
            <UInput v-model="state.password" type="password" placeholder="@Password123" class="w-full" />
          </UFormField>

          <UButton type="submit" size="lg" class="w-full justify-center">Submit</UButton>
        </UForm>
        <p class="self-center">or you can login with</p>
        <div class="space-x-[1rem] self-center">
          <UButton icon="i-ant-design-google-outline" size="lg">Google</UButton>
          <UButton icon="i-ant-design-github-filled" size="lg">Github</UButton>
          <UButton icon="i-ant-design-linkedin-filled" size="lg">LinkedIn</UButton>
        </div>
      </div>
    </UContainer>
  </main>
</template>
