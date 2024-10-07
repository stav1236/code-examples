import axios, { AxiosInstance } from 'axios';

export const mediaApiAxios: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_MEDIA_API_URL,
});