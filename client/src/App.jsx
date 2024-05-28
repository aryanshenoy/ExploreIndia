import { useEffect, useState } from "react"

import Map from "./Map"
import InfoBox from "./InfoBox"
import NavBar from "./NavBar";

import "./App.css"

function App(){

	const [findingHoveredState,setfindingHoveredState] = useState(null);
	const [boxPosition,setboxPosition] = useState({x : 0 , y : 0});
	const [navIsOpen,setnavIsOpen] = useState(true);

	useEffect(() => {
		const handleMouseMovement = (event) => {
			setboxPosition({x : event.clientX + 15 , y : event.clientY + 15});
		}
		window.addEventListener("mousemove",handleMouseMovement);
		return() => {
			window.removeEventListener("mousemove",handleMouseMovement);
		};
	},[]);

	return(
		<>
		<div className="bg-teal-200 h-screen w-screen dark:bg-zinc-950">
			<NavBar navBarStatus={navIsOpen} toggleNav={() => setnavIsOpen(!navIsOpen)}/>
			<div className={navIsOpen ? "blur-s" : ""}>
				<Map onStateHover={setfindingHoveredState}/>
				{findingHoveredState && 
				<InfoBox
			 	currentState={findingHoveredState}
				boxPosition={boxPosition}/>}
			</div>
		</div>
		</>
	)
}

export default App
