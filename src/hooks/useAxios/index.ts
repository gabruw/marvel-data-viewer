import axios, { AxiosInstance } from "axios";

export const useAxios = (): AxiosInstance =>
	axios.create({
		baseURL: import.meta.env.VITE_API_URL,
	});
