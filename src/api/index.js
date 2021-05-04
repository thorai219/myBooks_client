import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (data) => API.post("/auth/signin", data);
export const signUp = (data) => API.post("/auth/signup", data);
export const fetchNewReleases = () => API.get("/books/new");
export const fetchBooksByQuery = (data) => API.post("/books/search", data);
