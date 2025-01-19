import { defineStore } from "pinia";
import { api } from "../utils/instance.js";
import axios from "axios";


export const useAuthtore = defineStore("auth", () => {
  const createUser = async (email, password) => {
    await axios.post("http://localhost:5000/todo/signup", { email, password })
      .then(res => {
        console.log(res);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { createUser };
});
