import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    darkTheme: false,
    toggleDarkTheme: () => { }
})


export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleDarkTheme() {
        setDarkTheme(value => !value);
    }

    useEffect(() => {
        if (darkTheme) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    }, [darkTheme])


    const value = {
        darkTheme: darkTheme,
        toggleDarkTheme: toggleDarkTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}