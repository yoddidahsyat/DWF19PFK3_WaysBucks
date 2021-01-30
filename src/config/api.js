import axios from "axios";

export const baseURL = "https://waysbucks-api.herokuapp.com/api/v1";
export const uploadURL = "http://res.cloudinary.com/ddocknxiq/";

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
