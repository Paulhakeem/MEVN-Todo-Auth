<template>
  <main>
    <Header :msg="text" />

    <!-- input -->
    <InputTodo />
    <!-- main body -->
    <div class="bg-gray-50 flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg">
        <div
          class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        ></div>
        <div
          class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        ></div>
        <div
          class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        ></div>
        <div class="m-8 relative space-y-4">
          <div
            class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
          >
            <div class="flex-1 flex justify-between items-center">
              <p class="text-gray-500">Javascript</p>
              <button
                class="w-20 h-10 rounded-lg bg-purple-300 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
          >
            <div class="flex-1 flex justify-between items-center">
              <p class="text-gray-500">TypeScript</p>
              <button
                class="w-20 h-10 rounded-lg bg-purple-300 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
          >
            <div class="flex-1 flex justify-between items-center">
              <p class="text-gray-500">VueJs</p>
              <button
                class="w-20 h-10 rounded-lg bg-purple-300 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import InputTodo from "@/components/InputTodo.vue";

const text = "Welcome To Our Todo 🤗";
</script>
