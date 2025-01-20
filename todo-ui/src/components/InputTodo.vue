<template>
    <div class="relative justify-center m-auto max-w-md py-6">
      <label for="Search" class="sr-only"> Search </label>
    
      <input
        type="text"
        placeholder="Enter your todo..."
        class="w-full rounded-md border-gray-200 outline-none py-2.5 pe-10 shadow-sm sm:text-sm pl-2 hover:outline-gray-400"
      />
    
      <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" class="text-white bg-purple-300 p-1 rounded-md">
         Add
        </button>
      </span>
    </div>
  </template>
<script setup></script>