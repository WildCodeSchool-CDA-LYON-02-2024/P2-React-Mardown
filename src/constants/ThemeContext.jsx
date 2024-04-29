import { createContext } from "react";
import { Config } from "../config/index.jsx";

export const ThemeContext = createContext(Config.defaultTheme);
