<template>
  <main>
    <Header :msg="text" />

    <!-- input -->
    <div class="relative justify-center m-auto max-w-md py-6">
      <label for="Search" class="sr-only"> Search </label>

      <input
        v-model="todo"
        type="text"
        placeholder="Enter your todo..."
        class="w-full rounded-md border-gray-200 outline-none py-2.5 pe-10 shadow-sm sm:text-sm pl-2 hover:outline-gray-400"
      />

      <div class="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          @click="addTodo"
          type="button"
          class="text-white bg-purple-300 p-1 rounded-md"
        >
          Add
        </button>
      </div>
    </div>

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

        <!-- TODO LIST -->
        <div v-for="todo in todos" :key="todo._id" class="m-8 relative space-y-4">
        
          <div
            class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
          >
            <div class="flex-1 flex justify-between items-center">
              <p class="text-gray-500">{{ todo.name }}</p>
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
import { ref } from "vue";
import { useTodoStore } from "../store/todo.js";

const { createTodo } = useTodoStore();

const todo = ref("");

const todos = ref({})

const addTodo = async () => {
  const newTodo = await createTodo(todo.value);
  if (newTodo) {
    todos.value.push(newTodo.value)
  }
  todo.value = ''
};

const text = "Welcome To Our Todo 🤗";
</script>
