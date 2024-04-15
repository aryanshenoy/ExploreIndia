//aryan.
import { useState } from "react"
import { useEffect } from "react"

function InfoBox({currentState,boxPosition}){
    const [stateInfo,setstateInfo] = useState({})

    useEffect(() => {
        const fetchData = async (stateID) => {
            try{
                const response = await fetch(`http://localhost:5700?stateID=${stateID}`);
                if(!response.ok){
                    throw new Error("Data not recieved");
                }
                const data = await response.json();
                setstateInfo(data);
            }
            catch(error){
                console.log({error});
            };
        }

        if(currentState){
            fetchData(currentState);
        }
        else{
            setstateInfo({});
        }
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
            State : {stateInfo.State}
            <br />
            Capital : {stateInfo.Capital}
        </div>
        </>
    );
};

export default InfoBox