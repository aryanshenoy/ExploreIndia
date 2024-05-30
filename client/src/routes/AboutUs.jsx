import { useState , useEffect} from "react";

import NavBar from "../NavBar";
import Theme from "../Theme";

import GitHub from "../assets/github-142-svgrepo-com.svg";
import Instagram from "../assets/instagram-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

function AboutUs(){
    const [navIsOpen,setnavIsOpen] = useState(true);

    return(
        <>
            <Theme></Theme>
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
                                    src="/src/assets/aryan.jpg"
                                    alt="Aryan Shenoy"
                                    width="250"
                                    height="250"
                                    className="w-300 h-300 top-0 rounded-3xl"
                                />
                                <div className="pt-7 font-mono text-lg dark:invert">
                                    Aryan Shenoy
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
                                    <a href="https://www.instagram.com/aryan.shenoy?igsh=MTk3MmQ3NnE5MWtoMA==">
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
                                    src="/src/assets/akshara2.jpg"
                                    alt="Akshara Bhat"
                                    width="250"
                                    height="250"
                                    className="w-300 h-300 top-0 rounded-3xl"
                                />
                                <div className="pt-7 font-mono text-lg dark:invert">
                                    Akshara Bhat
                                </div>
                                <div className="flex justify-center dark:invert">
                                    <a href="https://github.com/akshara026">
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
                                    src="/src/assets/paddu.jpg"
                                    alt="Pradyumna Rao"
                                    width="250"
                                    height="250"
                                    className="w-300 h-300 top-0 rounded-3xl"
                                />
                                <div className="pt-7 font-mono text-lg dark:invert">
                                    Pradyumna Rao
                                </div>
                                <div className="flex justify-center dark:invert">
                                    <a href="https://github.com/BK-Pradyumna-Rao">
                                        <img src={GitHub}
                                            alt=""
                                            className="h-12 pt-5"
                                        />
                                    </a>
                                    <a href="https://www.linkedin.com/in/b-k-pradyumna-rao-80781b283/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
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