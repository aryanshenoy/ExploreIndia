import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import DarkSVG from "./assets/dark-mode-night-moon-svgrepo-com.svg";
import LightSVG from "./assets/light-mode-svgrepo-com.svg";

function Theme(){

    const [theme,settheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const previousTheme = useRef();
    
    const changeTheme = () => {
        settheme(theme==="dark"?"light":"dark");
    };

    useEffect(() => {
      if(theme==="dark"){
        document.body.classList.add("dark");
      }
      else{
        document.body.classList.remove("dark");
      }
      previousTheme.current=theme;
    }, [theme])

    localStorage.setItem("theme",theme);

    return(
        <img src={theme==="dark"?LightSVG:DarkSVG} 
        alt="Theme-Selction"
        onClick={changeTheme}
        className="absolute z-10 right-2 top-2 dark:invert(100%) size-12"/>
    );
}

export default Theme