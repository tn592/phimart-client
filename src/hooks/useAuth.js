import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");

	const getToken = () => {
		const token = localStorage.getItem("authTokens");
		return token ? JSON.parse(token) : null;
	};

	const [authTokens, setAuthTokens] = useState(getToken());

	useEffect(() => {
		if (authTokens) fetchUserProfile();
	}, [authTokens]);

	// Fetch user Profile
	const fetchUserProfile = async () => {
		try {
			const response = await apiClient.get("/auth/users/me", {
				headers: { Authorization: `JWT ${authTokens?.access}` },
			});
			setUser(response.data);
		} catch (error) {
			console.log("Error Fetching user", error);
		}
	};

	// Login User
	const loginUser = async (userData) => {
		try {
			const response = await apiClient.post("/auth/jwt/create", userData);
			setAuthTokens(response.data);
			localStorage.setItem("authTokens", JSON.stringify(response.data));
			// After login set user
			await fetchUserProfile();
		} catch (error) {
			console.log("Login Error", error.data?.response);
		}
	};

	// Register User
	const registerUser = async (userData) => {
		setErrorMsg("");
		try {
			await apiClient.post("/auth/users/", userData);
		} catch (error) {
			console.log(error);
		}
	};

	return { user, errorMsg, loginUser, registerUser };
};

export default useAuth;
