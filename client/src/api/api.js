import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000/api" 

const api = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    }
})

export default api

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    }
)

api.interceptors.response.use(
    (response) => {
        return response;
    }
)

// Handle 401 errors and refresh token
api.interceptors.response.use(
  (response) => response, // Directly return successful responses
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 (Unauthorized) and ensure we haven't already retried this request
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (!refreshToken) {
          return Promise.reject(error);
        }

        // Call your backend's refresh token endpoint
        // NOTE: Use a clean `axios` instance here, NOT `api`, to prevent interceptor loops
        const response = await axios.post(`${baseURL}auth/token/refresh`, {
          refreshToken: refreshToken,
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

        // Save the new tokens to your storage
        localStorage.setItem('access_token', newAccessToken);
        if (newRefreshToken) {
          localStorage.setItem('refresh_token', newRefreshToken);
        }

        // Update the original request's authorization header with the new token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        // Retry the original request with the updated headers and return its result
        return api(originalRequest);
        
      } catch (refreshError) {
        // If the refresh token itself is expired or invalid, force a logout
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    // Return any other error normally
    return Promise.reject(error);
  }
);

const handleLogout = () => {
    // Clear tokens and user data from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('auth_user');
}
