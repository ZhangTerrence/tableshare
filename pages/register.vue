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
  email: z.string().email("The user's email is invalid."),
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
  email: undefined,
  password: undefined,
});

const toast = useToast();

async function register(event: FormSubmitEvent<Schema>) {
  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: event.data,
      headers: useRequestHeaders(["cookie"]),
    });
  } catch (error) {
    const authError = error as { data: { title: string; description: string } };
    toast.add(authError.data);
  }
}

const user = useSupabaseUser();

watch(user, (authUser, _) => {
  if (authUser) {
    return navigateTo("/dashboard");
  }
});
</script>

<template>
  <main class="grow py-28">
    <UContainer>
      <div class="flex flex-col gap-y-[1rem]">
        <h1 class="text-4xl leading-tight">
          <strong>Register</strong>
        </h1>
        <USeparator />
        <UForm :schema="schema" :state="state" class="space-y-[2rem]" @submit="register">
          <UFormField label="Username" name="username" :required="true" class="space-y-[1rem]">
            <UInput v-model="state.username" placeholder="JohnDoe" class="w-full" />
          </UFormField>

          <UFormField label="Email" name="email" :required="true" class="space-y-[1rem]">
            <UInput v-model="state.email" placeholder="you@example.com" class="w-full" />
          </UFormField>

          <UFormField label="Password" name="password" :required="true" class="space-y-[1rem]">
            <UInput v-model="state.password" type="password" placeholder="@Password123" class="w-full" />
          </UFormField>

          <UButton type="submit" class="w-full justify-center">Submit</UButton>
        </UForm>
        <p class="self-center">or you can register with</p>
        <div class="space-x-[1rem] self-center">
          <UButton icon="i-ant-design-google-outline">Google</UButton>
          <UButton icon="i-ant-design-github-filled">Github</UButton>
          <UButton icon="i-ant-design-linkedin-filled">LinkedIn</UButton>
        </div>
      </div>
    </UContainer>
  </main>
</template>
