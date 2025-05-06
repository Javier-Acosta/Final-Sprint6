import axios from "axios";

const api= axios.create ({
    // baseURL: 'http://localhost:3000/api',
    baseURL: 'https://server-cbbf.onrender.com/api',
});

export const loginUser = (credentials) => api.post (`/auth/login`, credentials);
export const register = (data) => api.post(`/auth/register`, data);

export default api;