import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://edukidsserver.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;