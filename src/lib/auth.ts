import { User } from "../utils/interface";
import { api } from "./axios";

export const TOKEN_KEY = "@bndu-aracoop-token";
export const TOKEN_KEY_USER = "@bndu-aracoop-user";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const login = (token: string, user: User) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_KEY_USER, JSON.stringify(user));
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const logout = async () => {
    await api.post("/logout");
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY_USER);
  };