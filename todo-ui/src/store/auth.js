import { defineStore } from "pinia";
import { api } from "../utils/instance.js";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter()

export const useAuthtore = defineStore("auth", () => {
  const createUser = async (email, password) => {
    await axios.post("http://localhost:5000/todo/signup", { email, password })
      .then(res => {
        router.push({
          path: "/darshboard"
        })
        console.log(res);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { createUser };
});
