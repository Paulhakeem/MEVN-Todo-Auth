<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1
        class="text-center text-2xl font-semibold text-indigo-600 sm:text-3xl"
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
          class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
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
import axios from "axios";
import { ref } from "vue";

const email = ref("paulnyamawi@gmail.com");
const password = ref("1234");

const signupUser = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/todo/signup",
      email.value,
      password.value
    );
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
