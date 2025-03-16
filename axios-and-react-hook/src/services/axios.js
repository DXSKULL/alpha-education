import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://api.slingacademy.com/v1/sample-data",
    headers: {
        "Content-Type": "application/json"
    }
})