import axios from "axios";

export const baseURL = "http://localhost:5000/api/v1";
export const uploadURL = baseURL + "/uploads/";

export const API = axios.create({
    baseURL
});

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
};
