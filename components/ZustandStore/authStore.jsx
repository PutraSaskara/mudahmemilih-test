// authStore.js
import { create } from 'zustand';
import API_ENDPOINTS from '@/config';

const useAuthStore = create((set) => {
  let token = null;

  // Action: Perform login and store the token
  const login = () => {
    console.log("Starting login process...");

    const formData = new FormData();
    formData.append("email", process.env.NEXT_PUBLIC_EMAIL); // Hardcoded email
    formData.append("password", process.env.NEXT_PUBLIC_PASSWORD); // Hardcoded password

    const apiUrl = API_ENDPOINTS.login;

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((loginData) => {
        const authToken = loginData.access_token;
        set({ token: authToken }); // Update the token in the store
        console.log("Login successful, token received:", authToken);
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
      });
  };

  // Action: Initialize the login process if not already initialized
  const initOnce = () => {
    if (!token) {
      login();
    }
  };

  return {
    token,
    login,
    initOnce,
  };
});

export default useAuthStore;
