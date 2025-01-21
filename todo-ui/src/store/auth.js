import { defineStore } from "pinia";
import { api } from "../utils/instance.js";
import axios from "axios";

export const useAuthtore = defineStore("auth", () => {
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
    await axios
      .post("http://localhost:5000/todo/login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { createUser, loginUser };
});
