import { defineStore } from "pinia";
import { api } from "@/utils/instance";

export const useAuthtore = defineStore("auth", () => {
  const createUser = async (email, password) => {
    await api
      .post("/signup", { email, password })
      .then(res => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { createUser };
});
