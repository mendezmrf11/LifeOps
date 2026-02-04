import { create } from "zustand";

export const LoginAuth = create((set) => ({
    username: null,
    dashboard: "habits",
    setDashboard: (dashboard: string) => set({dashboard: dashboard}),
    login: (userData: string) => set({ username: userData }),
    logout: () => set({ username: null })
}));
