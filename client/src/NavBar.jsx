import { useState } from "react";
import CloseSVG from "./assets/chevron-left-navigation-svgrepo-com.svg";
import OpenSVG from "./assets/navigation-bar-menubar-hamburger-menu-svgrepo-com.svg";


function NavBar({navBarStatus,toggleNav}){

    const toggle = () => {
        toggleNav(navBarStatus);
    };

    return(
        <>
        <div className="flex flex-col">
            <img src={navBarStatus ? CloseSVG : OpenSVG}
                 alt="navBar"
                 onClick={toggle}
                 className="fixed top-0 z-10 cursor-pointer dark:invert"/>
            <div id="navBarView" className={`${navBarStatus?"w-44":"w-0"} transition-all dark:invert bg-red-300 h-screen pt-5 fixed top-0 left-0 z-0.1 text-center`}>
                {navBarStatus 
                    && 
                    <div>
                        <a className = "block pt-52 pb-3 pr-3 rounded font-mono text-2xl" href="">Home</a>
                        <a className = "block pt-14 pb-3 pr-3 rounded font-mono text-2xl" href="">About Us</a>   
                    </div>
                }
            </div>
        </div>
        </>
    );
}

export default NavBar;