import { createContext, useContext, useState } from "react";
import React from "react";

const ThemeContext = createContext({ theme: "light" });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
