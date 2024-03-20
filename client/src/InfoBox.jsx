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
                console.log("Error occured at Info Box Component");
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
        }}>
            State:{stateInfo.state}
            <br />
            Capital:{stateInfo.capital}
        </div>
        </>
    );
};

export default InfoBox