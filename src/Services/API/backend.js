import axios from "axios";


const api = axios.create({
    baseURL: "https://furia-tech-challenge-backend.vercel.app/"
});

export default api;