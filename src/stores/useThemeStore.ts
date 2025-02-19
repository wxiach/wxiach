import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Theme = "theme-light" | "dark" | "system";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      theme: "system" as Theme,
      setTheme: (theme: Theme) => set({ theme }),
    }),
    { name: "theme-storage", storage: createJSONStorage(() => localStorage) }
  )
);
