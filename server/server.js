const mongoose = require("mongoose");
const State = require("./states.js");
mongoose.connect("mongodb://localhost:27017/ExploreIndiaDB")
    .then(() => console.log("Mongoose works!"))
    .catch(() => console.error("Error occors during mongoose connection"));

//SAVING VALUES IN MONGODB
const statesData = [
    { ID: "INAN", Name: "Andaman and Nicobar Islands", Capital: "Port Blair" },
    { ID: "INAP", Name: "Andhra Pradesh", Capital: "Amaravati" },
    { ID: "INAR", Name: "Arunachal Pradesh", Capital: "Itanagar" },
    { ID: "INAS", Name: "Assam", Capital: "Dispur" },
    { ID: "INBH", Name: "Bihar", Capital: "Patna" },
    { ID: "INCH", Name: "Chandigarh", Capital: "Chandigarh" },
    { ID: "INCT", Name: "Chhattisgarh", Capital: "Raipur" },
    { ID: "INDH", Name: "Dadra and Nagar Haveli and Daman and Diu", Capital: "Daman" },
    { ID: "INDL", Name: "Delhi", Capital: "New Delhi" },
    { ID: "INGA", Name: "Goa", Capital: "Panaji" },
    { ID: "INGJ", Name: "Gujarat", Capital: "Gandhinagar" },
    { ID: "INHR", Name: "Haryana", Capital: "Chandigarh" },
    { ID: "INHP", Name: "Himachal Pradesh", Capital: "Shimla" },
    { ID: "INJK", Name: "Jammu and Kashmir", Capital: "Srinagar" },
    { ID: "INJH", Name: "Jharkhand", Capital: "Ranchi" },
    { ID: "INKA", Name: "Karnataka", Capital: "Bengaluru" },
    { ID: "INKL", Name: "Kerala", Capital: "Thiruvananthapuram" },
    { ID: "INLD", Name: "Ladakh", Capital: "Leh" },
    { ID: "INLA", Name: "Lakshadweep", Capital: "Kavaratti" },
    { ID: "INMP", Name: "Madhya Pradesh", Capital: "Bhopal" },
    { ID: "INMH", Name: "Maharashtra", Capital: "Mumbai" },
    { ID: "INMN", Name: "Manipur", Capital: "Imphal" },
    { ID: "INML", Name: "Meghalaya", Capital: "Shillong" },
    { ID: "INMZ", Name: "Mizoram", Capital: "Aizawl" },
    { ID: "INNL", Name: "Nagaland", Capital: "Kohima" },
    { ID: "INOD", Name: "Odisha", Capital: "Bhubaneswar" },
    { ID: "INPY", Name: "Puducherry", Capital: "Puducherry" },
    { ID: "INPB", Name: "Punjab", Capital: "Chandigarh" },
    { ID: "INRJ", Name: "Rajasthan", Capital: "Jaipur" },
    { ID: "INSK", Name: "Sikkim", Capital: "Gangtok" },
    { ID: "INTN", Name: "Tamil Nadu", Capital: "Chennai" },
    { ID: "INTG", Name: "Telangana", Capital: "Hyderabad" },
    { ID: "INTR", Name: "Tripura", Capital: "Agartala" },
    { ID: "INUP", Name: "Uttar Pradesh", Capital: "Lucknow" },
    { ID: "INUT", Name: "Uttarakhand", Capital: "Dehradun" },
    { ID: "INWB", Name: "West Bengal", Capital: "Kolkata" }
];

async function insertValuesInDatabase(){
    try{
        const check = await State.find();
        if(check.length===0){
            await Promise.all(statesData.map(x => State.create(x)));
            console.log("All the states are added succesfully");
        }
    }
    catch(e){
        console.log(e.message);
    }
}
insertValuesInDatabase();

//EXPRESS ROUTE TO GET STATE INFORMATION
const express = require("express");
const app = express()
const cors = require("cors")
app.use(cors(""));

app.get("/",async(req,res) => {
    const {stateID} = req.query;
    try{
        const state = await State.find({ ID:stateID });
        if(state.length===0){
            return res.status(404).json({error : "State Not Found"});
        }
        res.json({State : state[0].Name , Capital : state[0].Capital});
        console.log(`Details of ${state[0].Name} has been sent`)
    }
    catch(error){
        return res.status(500).json({error : "Internal server error"});
    }
})

app.listen(5700);