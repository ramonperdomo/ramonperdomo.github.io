import axios from "axios";

const api = axios.create({
  baseURL: "https://ssd-api.jpl.nasa.gov/",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default api;
