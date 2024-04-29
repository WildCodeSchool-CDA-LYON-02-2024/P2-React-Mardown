import { useContext, useState } from "react";
import { ThemeContext } from "../constants/ThemeContext.jsx";
import { Config } from "../config/index.jsx";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return {
    theme,
    toggleTheme,
    className: theme.value,
  };
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(Config.defaultTheme);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme: (theme) => setTheme(theme) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
