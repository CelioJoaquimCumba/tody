import axios from 'axios';

// const BASE_URL = "http://10.0.2.2:3000/";
// const BASE_URL = "http://192.168.22.185:3000/";
const BASE_URL = "http://localhost:3000"





export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
    },
})



