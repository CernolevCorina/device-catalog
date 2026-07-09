"use client";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={"text-foreground"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle theme
    </button>
  );
};

export default ThemeToggle;
