/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface AuthContextProps {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (username: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        fetchUserProfile(decodedToken.userId);
      } catch (error) {
        console.error("Failed to decode token", error);
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3100/api/users/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3100/login", {
        email,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      await fetchUserProfile(decodedToken.userId);

      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3100/signup", {
        username,
        email,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      await fetchUserProfile(decodedToken.userId);

      navigate("/");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
