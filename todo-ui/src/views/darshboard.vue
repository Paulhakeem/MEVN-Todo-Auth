<template>
  <main>
    <Header :msg="text" />

    <!-- input -->
    <div id="search" class="relative justify-center m-auto max-w-md py-6">
      <label for="Search" class="sr-only"> Search </label>

      <input
        v-model="newTodo"
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
    <div  class="flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg pt-4">
        <!--  -->
        <color1 />
        <color2 />
        <color3 />
        <!-- TODO LIST -->
        <div v-for="text in todos" :key="text.id">
          <div class="m-8 relative space-y-4">
            <div 
              class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
            >
              <div class="flex-1 flex justify-between items-center">
                <p class="text-gray-500">{{ text.name }}</p>
                <button
                  @click="deleteTodo"
                  class="w-20 h-10 rounded-lg bg-purple-300 text-white font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import color1 from "@/components/color1.vue";
import color2 from "@/components/color2.vue";
import color3 from "@/components/color3.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const newTodo = ref("");
const todos = ref([]);
// get todos
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/todo/get-todos");
    if (!response) {
      throw new Error("Network response was not ok");
    }
    const res = response.data.response;
    todos.value = await res;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
});
// add todos
const addTodo = async () => {
  const res = await axios.post("http://localhost:5000/todo/add-todo", {
    name: newTodo.value,
  });
  try {
    if (res) {
      todos.value.push({
        id: res.data.newTodo._id,
        name: res.data.newTodo.name,
      });
    }
    console.log(todos);

    newTodo.value = "";
  } catch (error) {
    console.log("error occur");
  }
};
// delete todos
const deleteTodo = async (id) => {
  await axios
    .delete(`http://localhost:5000/todo/delete-todo/${id}`)
    .then((res) => {
      console.log(res);
    });
};
const text = "Welcome To Our Todo 🤗";
</script>
