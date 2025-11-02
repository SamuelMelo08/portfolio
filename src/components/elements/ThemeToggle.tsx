"use client";

import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2"
    >
      {theme === "light" ? ( <CiDark size={25}/> ) : ( <CiLight size={25}/> )}
    </button>
  );
}
