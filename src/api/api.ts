import axios from 'axios';
import type { AxiosInstance, AxiosError } from 'axios';
const API: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 10000,
    timeoutErrorMessage: 'timeout',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default API;
