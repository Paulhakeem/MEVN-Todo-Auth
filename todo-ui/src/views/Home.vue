<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1
        class="text-center text-2xl font-semibold text-purple-400 sm:text-3xl"
      >
        MEVN Todo Auth
      </h1>

      <form
        @submit.prevent="singInUser"
        class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p class="text-center text-lg font-medium">Login to your account</p>

        <div>
          <label for="text" class="sr-only">Email</label>

          <div class="relative">
            <input
              v-model="email"
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter name"
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
            />
          </div>
        </div>

        <button
          @click="singInUser"
          type="submit"
          class="block w-full rounded-lg bg-purple-400 px-5 py-3 text-sm font-medium text-white"
        >
          Login
        </button>

        <p class="text-center text-sm text-gray-500">
          No account?
          <RouterLink to="/signup" class="underline">Sign up</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthtore } from "../store/auth.js";

const email = ref("");
const password = ref("");

const router = useRouter();

const { loginUser } = useAuthtore();

const singInUser = async () => {
  await loginUser(email.value, password.value)
};
</script>
