import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added to keep tracking state during initial bootup

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing stored user data", e);
      }
    }
    setIsLoading(false); // Initial storage inspection complete
  }, []);

  const login = async (payload) => {
    try {
      setError(null); 
      // Resolves perfectly to http://127.0.0
      const response = await api.post('auth/token/', payload);
      
      const user = response.data?.user;
      const accessToken = response.data?.access;
      const refreshToken = response.data?.refresh;

      if (user) {
        localStorage.setItem('auth_user', JSON.stringify(user));
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        
        setCurrentUser(user);
        return true; 
      }
      
      return false;
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.detail || 'Login failed');
      return false; 
    }
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    try {
      // OPTION A: If your Django app uses simplejwt.token_blacklist, uncomment this:
      // await api.post('auth/logout/', { refresh: refreshToken });
    } catch (error) {
      console.error("Backend logout clearance failed:", error);
    } finally {
      // Always purge local state regardless of whether backend request succeeds or fails
      localStorage.removeItem('auth_user');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setCurrentUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, error, setError, isLoading }}>
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
