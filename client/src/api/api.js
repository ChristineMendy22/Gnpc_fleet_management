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
        const accessToken = localStorage.getItem("access_token")
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (!refreshToken) {
          handleLogout();
          return Promise.reject(error);
        }

        // Request a new access token using the refresh token
        const response = await axios.post(`${BASE_URL}/auth/token/refresh/`, {
          refresh: refreshToken, 
        });

        const { access, refresh } = response.data;

        localStorage.setItem('access_token', access);
        if (refresh) {
          localStorage.setItem('refresh_token', refresh);
        }

        originalRequest.headers['Authorization'] = `Bearer ${access}`;

        // FIX: Retry using 'api(originalRequest)' instead of global 'axios(originalRequest)'
        // This ensures the relative backend path inherits your base domain safely!
        return api(originalRequest);
        
      } catch (refreshError) {
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('auth_user');
    if (window.location.pathname !== '/login') {
        window.location.href = '/login';
    }
}
