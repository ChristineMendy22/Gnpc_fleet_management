import { createContext, useContext, useEffect, useState } from 'react';
// import { USERS } from '../data/dummyData';
import api from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing stored user data", e);
      }
    }
  }, []);

  const login = async (payload) => {
    try {
      setError(null); // Clear previous errors on a new login attempt
      const response = await api.post('auth/token/', payload);
      
      const user = response.data?.user;
      const accessToken = response.data?.access;
      const refreshToken = response.data?.refresh;

      if (user) {
        localStorage.setItem('auth_user', JSON.stringify(user));
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        
        setCurrentUser(user);
        return true; // Successfully logged in
      }
      
      return false;
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.detail || 'Login failed');
      return false; // Login failed
    }
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    try {
    //   await api.post('auth/logout/', { refresh: refreshToken });
        await api.post('auth/token/refresh/', { refresh: refreshToken });
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.removeItem('auth_user');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setCurrentUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
