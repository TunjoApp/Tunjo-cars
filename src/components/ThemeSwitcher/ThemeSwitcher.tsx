"use client";

import { useThemeContext } from "@/src/context/ThemeProvider";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
