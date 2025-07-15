// hooks/useAuth.js
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, logout, isAuthenticated: !!user };
};
