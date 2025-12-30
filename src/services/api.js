import axios from "axios";

const api = axios.create({
  baseURL: "mini-user-management-system-backend-production.up.railway.app",
 withCredentials: true,
});


export default api;
