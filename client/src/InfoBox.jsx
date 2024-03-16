import { useState } from "react"
import { useEffect } from "react"

function InfoBox(){
    const [stateInfo,setstateInfo] = useState([{}])

    useEffect(() => {
        const fetchdata = async () => {
            try{
                const response = await fetch("/")
                if(!response.ok){
                    throw new Error("Data not recieved");
                }
                const data = await response.json()
                setstateInfo(data)
            }
            catch(error){
                console.error(error)
            }
        };

    },[])
};

export default InfoBox