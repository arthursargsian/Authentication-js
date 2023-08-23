import axios from "axios";
import Utils from "../Utils";

const api = axios.create({
    baseURL: "http://localhost:8080/",
});

api.interceptors.request.use((config) => {
    const token = Utils.getToken();
    if (token) config.headers.Authorization = token;
    return config;
}, (error) => Promise.reject(error));

class Api {
    static signUp(payload) {
        return api.post("api/auth/signup", {
            username: payload.username, email: payload.email, password: payload.password,
        });
    }

    static signIn(payload) {
        return api.post("api/auth/signin", {username: payload.username, password: payload.password});
    }

    static userContent() {
        return api.get("/api/test/user");
    }
}

export default Api;


