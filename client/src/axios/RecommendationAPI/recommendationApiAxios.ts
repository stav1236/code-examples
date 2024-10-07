import axios, { AxiosInstance } from 'axios';

export const recommendationApiAxios: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_RECOMMENDATION_API_URL,
});
