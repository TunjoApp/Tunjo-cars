"use client";

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "@src/theme";

type ThemeContextType = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as PaletteMode) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
