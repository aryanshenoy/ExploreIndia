import { useState,useEffect } from "react";
import CloseSVG from "./assets/chevron-left-navigation-svgrepo-com.svg";
import OpenSVG from "./assets/navigation-bar-menubar-hamburger-menu-svgrepo-com.svg";
import DarkSVG from "./assets/dark-mode-night-moon-svgrepo-com.svg";
import LightSVG from "./assets/light-mode-svgrepo-com.svg";


function NavBar({navBarStatus,toggleNav}){

    const [theme,settheme] = useState("light");
    
    useEffect(() => {
        if(theme==="dark"){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");
        }

    },[theme])

    const toggle = () => {
        toggleNav(navBarStatus);
    };

    const handleThemeSwitch = () => {
        if(theme==="light"){
            settheme("dark");
        }
        else{
            settheme("light");
        }
    }

    return(
        <>
        <img src={theme==="dark" ? LightSVG : DarkSVG}
            alt="Mode"
            className="fixed top-1 right-1 h-11"
            onClick={handleThemeSwitch}
        />
        <div className="flex flex-col">
            <img src={navBarStatus ? CloseSVG : OpenSVG}
                 alt="navBar"
                 onClick={toggle}
                 className="fixed top-0 z-10 h-12 cursor-pointer dark:invert"
            />
            <div id="navBarView" className={`${navBarStatus?"w-44":"w-0"} transition-all dark:bg-red-950 bg-red-300 h-screen pt-5 fixed top-0 left-0 z-0.1 text-center`}>
                {navBarStatus 
                    && 
                    <div>
                        <a className = "block pt-40 pb-3 pr-3 rounded font-mono text-2xl dark:text-zinc-200" href="/">Home</a>
                        <a className = "block pt-14 pb-3 pr-3 rounded font-mono text-2xl dark:text-zinc-200" href="about-us">About Us</a>   
                    </div>
                }
            </div>
        </div>
        </>
    );
}

export default NavBar;