import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://convo-3pxn.onrender.com/api",
  withCredentials: true,
});
