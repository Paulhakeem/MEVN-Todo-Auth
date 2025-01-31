import { defineStore } from "pinia";
import { api } from "../utils/instance.js";
import { useRouter } from "vue-router";
import axios from "axios";

export const useAuthtore = defineStore("auth", () => {
  const router = useRouter();
  const createUser = async (email, password) => {
    await axios
      .post("http://localhost:5000/todo/signup", { email, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("userToken", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login
  const loginUser = async (email, password) => {
    const res = await axios.post("http://localhost:5000/todo/login", {
      email,
      password,
    });
    try {
      if (res) {
        return res;
      }
      router.push({
        path: "/darshboard",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { createUser, loginUser };
});
