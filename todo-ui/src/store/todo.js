import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", () => {
  const createTodo = async (name) => {
    const res = await axios.post("http://localhost:5000/todo/add-todo", {
      name,
    });
    try {
      if (res) {
        console.log("todo added");
      }
    } catch (error) {
      console.log("error occur");
    }
  };

  return {createTodo};
});
