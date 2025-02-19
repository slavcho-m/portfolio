import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('minecraft');

    return (
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);