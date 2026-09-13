import { useEffect } from "react";
import { resolveAppearance, useAppStore, useHydrated } from "@/lib/store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const appearance = useAppStore((state) => state.profile.appearance);
  const hydrated = useHydrated();

  useEffect(() => {
    if (!hydrated) return;
    const apply = () => {
      const resolved = resolveAppearance(appearance);
      document.documentElement.classList.toggle("dark", resolved === "dark");
    };
    apply();
    if (appearance !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [appearance, hydrated]);

  return children;
}
