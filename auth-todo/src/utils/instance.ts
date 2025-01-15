import axios from "axios";

export const url = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})