import React from "react";
import { useState } from "react";
import NavBar from "../NavBar";
import GitHub from "../assets/github-142-svgrepo-com.svg";
import Instagram from "../assets/instagram-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

function AboutUs(){
    const [navIsOpen,setnavIsOpen] = useState(true);

    return(
        <>
            <NavBar navBarStatus={navIsOpen} toggleNav={() => setnavIsOpen(!navIsOpen)}/>
            <div className={navIsOpen ? "blur-sm" : ""}>
                <div className="bg-teal-200 h-screen w-screen dark:bg-zinc-950">
                    <div className="text-5xl pt-12 font-mono dark:text-zinc-200">
                        Meet The Developers
                    </div>
                    <div className="flex justify-center pt-12 space-x-9">
                        <div className="border-2 border-zinc-950 dark:border-zinc-300 dark:bg-indigo-950 bg-indigo-400 gap-4 h-full hover:scale-105 transition-transform duration-300">
                            <div className="p-2.5 rounded-2xl">
                                <img 
                                    src="/src/assets/1701933236711.jpeg"
                                    alt="Aryan Shenoy"
                                    width="250"
                                    height="250"
                                    className="w-300 h-300 top-0 rounded-3xl"
                                />
                                <div className="pt-7 font-mono text-lg dark:invert">
                                    Aryan Shenoy
                                </div>
                                <div className="font-mono text-base pt-1 dark:invert">
                                    Team Lead
                                </div>
                                <div className="flex justify-center dark:invert">
                                    <a href="https://github.com/aryanshenoy">
                                        <img src={GitHub}
                                            alt=""
                                            className="h-12 pt-5"
                                        />
                                    </a>
                                    <a href="https://www.linkedin.com/in/aryan-shenoy-366939252/">
                                        <img src={LinkedIn}
                                            alt=""
                                            className="h-12 pt-5 pl-6"
                                        />
                                    </a>
                                    <a href="">
                                        <img src={Instagram}
                                            alt=""
                                            className="h-12 pt-5 pl-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-zinc-950 dark:border-zinc-300 dark:bg-indigo-950 bg-indigo-400 gap-4 h-full hover:scale-105 transition-transform duration-300">
                            <div className="p-2.5 rounded-2xl">
                                <img 
                                    src=""
                                    alt="Akshara Bhat"
                                    width="250"
                                    height="250"
                                    className="w-300 h-300 top-0 rounded-3xl"
                                />
                                <div className="pt-7 font-mono text-lg dark:invert">
                                    Akashara Bhat
                                </div>
                                <div className="flex justify-center dark:invert">
                                    <a href="">
                                        <img src={GitHub}
                                            alt=""
                                            className="h-12 pt-5"
                                        />
                                    </a>
                                    <a href="">
                                        <img src={LinkedIn}
                                            alt=""
                                            className="h-12 pt-5 pl-6"
                                        />
                                    </a>
                                    <a href="">
                                        <img src={Instagram}
                                            alt=""
                                            className="h-12 pt-5 pl-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-zinc-950 dark:border-zinc-300 dark:bg-indigo-950 bg-indigo-400 gap-4 h-full hover:scale-105 transition-transform duration-300">
                            <div className="p-2.5 rounded-2xl">
                                <img 
                                    src=""
                                    alt="Pradyumna Rao"
                                    width="250"
                                    height="250"
                                    className="w-300 h-300 top-0 rounded-3xl"
                                />
                                <div className="pt-7 font-mono text-lg dark:invert">
                                    Pradyumna Rao
                                </div>
                                <div className="flex justify-center dark:invert">
                                    <a href="">
                                        <img src={GitHub}
                                            alt=""
                                            className="h-12 pt-5"
                                        />
                                    </a>
                                    <a href="">
                                        <img src={LinkedIn}
                                            alt=""
                                            className="h-12 pt-5 pl-6"
                                        />
                                    </a>
                                    <a href="">
                                        <img src={Instagram}
                                            alt=""
                                            className="h-12 pt-5 pl-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs