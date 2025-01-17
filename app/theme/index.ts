import { PaletteMode, ThemeOptions } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#1976d2" : "#bb86fc",
    },
    secondary: {
      main: mode === "light" ? "#dc004e" : "#03dac6",
    },
    background: {
      default: mode === "light" ? "#ffffff" : "#121212",
      paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
    },
    text: {
      primary: mode === "light" ? "#000000" : "#ffffff",
    },
  },
});
