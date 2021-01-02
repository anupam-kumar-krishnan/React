import React, {useContext} from 'react';
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
   const [themeMode, setThememode] = useContext(ThemeContext);
    return (
        <div
        onClick = {() => {
            setThememode(themeMode === "light" ? "dark" : "light")
        }}>
            
            <span>{themeMode === "light" ? "Turn  Off" : "Lights On"}</span>
        </div>
    );
};

export default ThemeToggler;
