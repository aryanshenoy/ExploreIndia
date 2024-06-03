//aryan.
import { useState } from "react"
import { useEffect } from "react"

function InfoBox({currentState,boxPosition}){
    const [stateInfo,setstateInfo] = useState({});
    const [stateId,setstateId] = useState("");

    useEffect(() => {
        const fetchData = async (stateID) => {
            const response = await fetch(`http://localhost:5700/info-box?stateID=${stateID}`);
            if(!response.ok){
                console.error("Data not recieved");
                return;
            }
            const data = await response.json();
            setstateInfo(data);
            setstateId(stateID);
        }
        if(currentState)
            fetchData(currentState);
    },[currentState]);


    return(
        <>
        <div id="info-box" style = {{
            left: boxPosition.x,
            top: boxPosition.y,
            display: currentState ? "block" : "none",
            }}
            className="bg-white rounded-md border-2 absolute border-stone-950 px-2"
        >
            {stateId === "INAN" || stateId === "INCH" || stateId === "INDH" || stateId === "INDL" || stateId === "INLA" || stateId === "INJK" || stateId === "INLD" || stateId === "INPY" ? (
                <>
                <div>Union Territory : {stateInfo.State}</div>
                <div>Capital : {stateInfo.Capital}</div>
                </>
            ) : (
                <>
                <div>State : {stateInfo.State}</div>
                <div>Capital : {stateInfo.Capital}</div>
                </>
            )}
        </div>
        </>
    );
};

export default InfoBox