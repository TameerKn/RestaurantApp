import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  // Base colors
  const primaryBase = "#d69345";
  const primaryLight = "#e8b67a";
  const primaryDark = "#b57a38";
  const secondaryBase = "#262019";
  const textPrimaryLight = "rgba(0, 0, 0, 0.87)";
  const textPrimaryDark = "rgba(255, 255, 255, 0.87)";

  const mytheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: primaryBase,
        light: primaryLight,
        dark: primaryDark,
        contrastText: isDark ? "#121212" : "#ffffff",
      },
      secondary: {
        main: isDark ? "#e0a055" : secondaryBase,
        light: isDark ? "#d1d9ff" : "#8e99f3",
        dark: isDark ? "#6f79a8" : "#26418f",
        contrastText: "#ffffff",
      },
      background: {
        default: isDark ? "#121212" : "#f5f5f5",
        paper: isDark ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: isDark ? textPrimaryDark : textPrimaryLight,
        secondary: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
        disabled: isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)",
      },
      action: {
        active: isDark ? primaryLight : primaryBase,
        hover: isDark ? "rgba(214, 147, 69, 0.08)" : "rgba(214, 147, 69, 0.04)",
        hoverOpacity: 0.08,
        selected: isDark ? "rgba(214, 147, 69, 0.16)" : "rgba(214, 147, 69, 0.12)",
        selectedOpacity: 0.16,
        disabled: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.26)",
        disabledBackground: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
      },
      divider: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
      custom: {
        accent: isDark ? "#ffab91" : "#ff7043",
        success: isDark ? "#81c784" : "#4caf50",
        warning: isDark ? "#ffb74d" : "#ff9800",
        error: isDark ? "#e57373" : "#f44336",
        delete: "#cf0000",
        deletehover: "#9e0505",
        info: isDark ? "#64b5f6" : "#2196f3",
        glow: "0 0 10px rgba(214, 147, 69, 0.7)",
      }
    },
    typography: {
      fontFamily: "Akatab, sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2rem",
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 2,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#1e1e1e" : primaryBase,
            color: isDark ? textPrimaryDark : "#ffffff",
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "8px 16px",
            fontWeight: 600,
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: isDark ? primaryLight : primaryDark,
            },
          },
          outlined: {
            borderColor: isDark ? primaryLight : primaryBase,
            color: isDark ? primaryLight : primaryBase,
            "&:hover": {
              backgroundColor: isDark ? "rgba(214, 147, 69, 0.08)" : "rgba(214, 147, 69, 0.04)",
              borderColor: isDark ? primaryLight : primaryDark,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: isDark ? primaryLight : primaryBase,
            "&:hover": {
              color: isDark ? primaryBase : primaryDark,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={mytheme}>
      <ThemeContext.Provider value={{ toggleDarkMode, isDark }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a Provider");
  return context;
};