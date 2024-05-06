import { useState,useEffect } from "react";
import CloseSVG from "./assets/chevron-left-navigation-svgrepo-com.svg";
import OpenSVG from "./assets/navigation-bar-menubar-hamburger-menu-svgrepo-com.svg";
import DarkSVG from "./assets/dark-mode-night-moon-svgrepo-com.svg";
import LightSVG from "./assets/light-mode-svgrepo-com.svg";


function NavBar({navBarStatus,toggleNav}){
    let autochangetheme = "dark";
    const [theme,settheme] = useState(autochangetheme);
    const toggle = () => {
        toggleNav(navBarStatus);
    };
    console.log(autochangetheme)
    const handleThemeSwitch = () => {
		if(theme==="dark"){
			autochangetheme="light";
            settheme(autochangetheme);}
		else{
			autochangetheme="dark";
            settheme(autochangetheme)}
	}

    useEffect(() => {
		if(theme==="dark"){
			document.body.classList.add("dark");
		}
		else{
			document.body.classList.remove("dark");
		}
	},[theme])

    return(
        <>
        <img 
		      src={theme==="dark" ? LightSVG : DarkSVG}
			  alt="Theme Icon"
			  onClick={handleThemeSwitch}
			  className="absolute z-10 right-0 size-14 top-2"
		/>
        <div className="flex flex-col">
            <img src={navBarStatus ? CloseSVG : OpenSVG}
                 alt="navBar"
                 onClick={toggle}
                 className="fixed top-2 z-10 h-12 cursor-pointer dark:invert"
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