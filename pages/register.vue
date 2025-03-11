<script setup lang="ts">
definePageMeta({
  layout: "unprotected",
});

import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]*.{3,31}$/, "The user's username must have between 3 and 31 alphanumeric characters."),
  email: z.string().email("The user's email is invalid."),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-._@+]).*.{8,}$/,
      "The user's password must have at least 8 characters with least one number, one lowercase letter, one upper case letter, one special character.",
    ),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  username: undefined,
  email: undefined,
  password: undefined,
});

const { fetch: refreshSession } = useUserSession();
const toast = useToast();

async function register(event: FormSubmitEvent<Schema>) {
  await useFetch("/api/auth/register", {
    method: "POST",
    body: {
      username: event.data.username,
      email: event.data.email,
      password: event.data.password,
    },
    async onResponse() {
      await refreshSession();
      await navigateTo("/dashboard");
    },
    async onResponseError() {
      toast.add({
        title: "Error registering user.",
      });
    },
  });
}
</script>

<template>
  <main class="min-h-screen py-48">
    <UContainer>
      <div class="space-y-4">
        <h1 class="text-4xl leading-tight">
          <strong>Register</strong>
        </h1>
        <UDivider />
        <UForm :schema="schema" :state="state" @submit="register" class="space-y-6">
          <UFormGroup label="Username" name="username" :required="true" size="lg" class="space-y-4">
            <UInput v-model="state.username" placeholder="JohnDoe" />
          </UFormGroup>

          <UFormGroup label="Email" name="email" :required="true" size="lg" class="space-y-4">
            <UInput v-model="state.email" placeholder="you@example.com" />
          </UFormGroup>

          <UFormGroup label="Password" name="password" :required="true" size="lg" class="space-y-4">
            <UInput v-model="state.password" type="password" placeholder="@Password123" />
          </UFormGroup>

          <UButton type="submit" class="p-2" block> Submit</UButton>
        </UForm>
      </div>
    </UContainer>
  </main>
</template>
