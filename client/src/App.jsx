import { useEffect, useState } from "react"
import Map from "./Map"
import InfoBox from "./InfoBox"

function App(){

	const [findingHoveredState,setfindingHoveredState] = useState(null);
	const [boxPosition,setboxPosition] = useState({x : 0 , y : 0});

	useEffect(() => {
		const handleMouseMovement = (event) => {
			setboxPosition({x : event.clientX + 10 , y : event.clientY + 10});
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
