import { useState } from "react";

function NavBar({navBarStatus,toggleNav}){

    const toggle = () => {
        toggleNav(navBarStatus);
    };

    return(
        <>
        <div id="navBarView" className={`${navBarStatus?"w-44":"w-0"} transition-all bg-teal-700 h-screen pt-5 fixed top-0 left-0 z-0.1 text-center`}>
            <button className="p-3 rounded hover:bg-red-950"
                    onClick={toggle}>
                {navBarStatus ? "Close" : "Open"}
            </button>
            {navBarStatus && <div>
                                <a className = "block pt-3 ps-3 pb-3 pr-3 rounded" href="">Home</a>
                                <a className = "block pt-3 ps-3 pb-3 pr-3 rounded" href="">About Us</a>   
                             </div>
            }
        </div>
        </>
    );
}

export default NavBar;