"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
