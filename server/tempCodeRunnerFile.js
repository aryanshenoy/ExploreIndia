app.get("/additional-info",async(req,res) => {
    const {stateID} = req.query;
    try{
        const state = await State.find({ ID:stateID });
        const stateInfo = await Information.find({ID:stateID});
        if(stateInfo.length===0){
            return res.status(404).json({error : "State not Found"});
        }
        res.json({State : state[0].Name,
                  Capital : state[0].Capital,
                  Area : stateInfo[0].Area,
                  BiggestCity : stateInfo[0].BiggestCity,
                  DateOfFormation : stateInfo[0].FormationDate});
    }
    catch(error){
        return res.status(500).json({error : "Internal server error"});
    }
})