/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Player, User, UserLike } from "../types";

interface AuthContextProps {
  user: User | null | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (username: string, email: string, password: string) => Promise<void>;
  likedPlayers: UserLike[];
  fetchLikedPlayers: (userId: string) => Promise<void>;
  fetchUserProfile: (userId: string) => Promise<void>;
  likePlayer: (userId: string, player: Player) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>();
  const [likedPlayers, setLikedPlayers] = useState<UserLike[]>([]);
  const navigate = useNavigate();

  const fetchUserProfile = useCallback(async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3100/api/users/${userId}`
      );
      setUser(response.data);
      await fetchLikedPlayers(userId);
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  }, []);

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
  }, [fetchUserProfile]);

  const fetchLikedPlayers = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3100/api/users/${userId}/like`
      );
      setLikedPlayers(response.data);
    } catch (error) {
      console.error("Failed to fetch liked players", error);
    }
  };

  const likePlayer = async (userId: string, player: Player) => {
    const isLiked = likedPlayers.some((p) => p.PlayerId === player.PlayerId);
    if (isLiked) {
      return; // TODO: Add some UI feedback
    }
    try {
      const data = { userId, ...player };
      await axios.post(`http://localhost:3100/api/users/${userId}/like`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setLikedPlayers([...likedPlayers, data]);
    } catch (error) {
      console.error("Failed to like player", error);
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
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        fetchLikedPlayers,
        fetchUserProfile,
        likedPlayers,
        likePlayer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
