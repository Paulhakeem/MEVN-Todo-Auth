<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1
        class="text-center text-2xl font-semibold text-purple-400 sm:text-3xl"
      >
        MEVN Todo Auth
      </h1>

      <form
        @submit.prevent="signupUser"
        class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p class="text-center text-lg font-medium">Create an account</p>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              v-model="email"
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>

          <div class="relative">
            <input
              v-model="password"
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              required
            />
          </div>
        </div>

        <button
          class="block w-full rounded-lg bg-purple-400 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>

        <p class="text-center text-sm text-gray-500">
          Have an account?
          <RouterLink to="/" class="underline">Login</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthtore } from "../store/auth.js";
import { useRouter } from "vue-router";
const { createUser } = useAuthtore();

const router = useRouter();

const email = ref("");
const password = ref("");

const signupUser = async () => {
  const newuser = await createUser(email.value, password.value);
  if (newuser) {
    console.log("account created");
  }
  router.push({
    path: "/darshboard",
  });
  email.value = "";
  password.value = "";
};
</script>
