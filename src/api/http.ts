import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = 'http://localhost:8888';
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            'content-type': 'application/json',
        },
        withCredentials: true,
        ...config
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (errors) => {
            return Promise.reject(errors);
        }
    );

    return axiosInstance;
}

export const httpClient = createClient();