import { useEffect, useState } from "react"
import Map from "./Map"
import InfoBox from "./InfoBox"
import NavBar from "./NavBar";

function App(){

	const [findingHoveredState,setfindingHoveredState] = useState(null);
	const [boxPosition,setboxPosition] = useState({x : 0 , y : 0});

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
			<Map onStateHover={setfindingHoveredState}></Map>
			{findingHoveredState && 
			<InfoBox
			 	currentState={findingHoveredState}
				boxPosition={boxPosition}>
			</InfoBox>}
		</>
	)
}

export default App
