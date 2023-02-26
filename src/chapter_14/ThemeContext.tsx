import React from "react";

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeState>({
  theme: "light",
  toggleTheme: () => {},
});
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
