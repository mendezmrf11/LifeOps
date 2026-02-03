import { create } from "zustand";

export const LoginAuth = create((set) => ({
    username: null,
    login: (userData: string) => set({ username: userData }),
    logout: () => set({ username: null })
}));
