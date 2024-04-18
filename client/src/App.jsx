import { useEffect, useState } from "react"
import Map from "./Map"
import InfoBox from "./InfoBox"
import NavBar from "./NavBar";
import DarkSVG from "./assets/dark-mode-night-moon-svgrepo-com.svg";
import LightSVG from "./assets/light-mode-svgrepo-com.svg";
import "./App.css"

function App(){

	const [findingHoveredState,setfindingHoveredState] = useState(null);
	const [boxPosition,setboxPosition] = useState({x : 0 , y : 0});
	const [navIsOpen,setnavIsOpen] = useState(true);
	const [theme,settheme] = useState("light");

	useEffect(() => {
		const handleMouseMovement = (event) => {
			setboxPosition({x : event.clientX + 15 , y : event.clientY + 15});
		}

		window.addEventListener("mousemove",handleMouseMovement);

		return() => {
			window.removeEventListener("mousemove",handleMouseMovement);
		};
	},[]);

	useEffect(() => {
		if(theme==="dark"){
			document.body.classList.add("dark");
		}
		else{
			document.body.classList.remove("dark");
		}
	},[theme])

	const handleTheThemeSwitch = () => {
		if(theme==="dark"){
			settheme("light")
		}
		else{
			settheme("dark")
		}
	}
	return(
		<div className="bg-teal-200 h-screen w-screen dark:bg-zinc-950">
			<img 
				src={theme==="dark" ? LightSVG : DarkSVG} 
				alt="Theme Selection"
				onClick={handleTheThemeSwitch}
				className="fixed top-0 right-0"
			/>
			<NavBar navBarStatus={navIsOpen} toggleNav={() => setnavIsOpen(!navIsOpen)}></NavBar>
			<div className={navIsOpen ? "blur-sm" : ""}>
				<Map onStateHover={setfindingHoveredState}></Map>
				{findingHoveredState && 
				<InfoBox
			 	currentState={findingHoveredState}
				boxPosition={boxPosition}/>}
			</div>
		</div>
	)
}

export default App
