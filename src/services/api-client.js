import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://phi-mart-tau.vercel.app/api/v1",
});

export default apiClient;
