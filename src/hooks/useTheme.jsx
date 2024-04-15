import { createContext, useContext, useState } from "react";
export const ThemeContext = createContext({
    backgroundColor: "#FFF",
    textColor: "#000",
    linkColor: "#00F",
    codeBackgroundColor: "#C9C9C9",
});

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return {
        theme,
        toggleTheme,

        className: theme.value
    };
}

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState({
        backgroundColor: "#FFF",
        textColor: "#000",
        linkColor: "#00F",
        codeBackgroundColor: "#C9C9C9",
    });

    return <ThemeContext.Provider value={{ theme, toggleTheme: (theme) => setTheme(theme) }}>
        { children }
    </ThemeContext.Provider>
}