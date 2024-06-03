const mongoose = require("mongoose");

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

const stateInformation = [
    { ID: "INAN", Area: 8249, LargestCity: "Port Blair", FormationDate: new Date("1956-11-01") },
    { ID: "INAP", Area: 162968, LargestCity: "Visakhapatnam", FormationDate: new Date("1956-11-01") },
    { ID: "INAR", Area: 83743, LargestCity: "Itanagar", FormationDate: new Date("1987-02-20") },
    { ID: "INAS", Area: 78438, LargestCity: "Guwahati", FormationDate: new Date("1947-08-15") },
    { ID: "INBH", Area: 94163, LargestCity: "Patna", FormationDate: new Date("1912-03-22") },
    { ID: "INCH", Area: 114, LargestCity: "Chandigarh", FormationDate: new Date("1966-11-01") },
    { ID: "INCT", Area: 135192, LargestCity: "Raipur", FormationDate: new Date("2000-11-01") },
    { ID: "INDH", Area: 603, LargestCity: "Silvassa", FormationDate: new Date("2020-01-26") },
    { ID: "INDL", Area: 1484, LargestCity: "Delhi", FormationDate: new Date("1956-11-01") },
    { ID: "INGA", Area: 3702, LargestCity: "Vasco da Gama", FormationDate: new Date("1987-05-30") },
    { ID: "INGJ", Area: 196024, LargestCity: "Ahmedabad", FormationDate: new Date("1960-05-01") },
    { ID: "INHR", Area: 44212, LargestCity: "Faridabad", FormationDate: new Date("1966-11-01") },
    { ID: "INHP", Area: 55673, LargestCity: "Shimla", FormationDate: new Date("1971-01-25") },
    { ID: "INJK", Area: 222236, LargestCity: "Srinagar", FormationDate: new Date("2019-10-31") },
    { ID: "INJH", Area: 79716, LargestCity: "Jamshedpur", FormationDate: new Date("2000-11-15") },
    { ID: "INKA", Area: 191791, LargestCity: "Bengaluru", FormationDate: new Date("1956-11-01") },
    { ID: "INKL", Area: 38852, LargestCity: "Kochi", FormationDate: new Date("1956-11-01") },
    { ID: "INLD", Area: 59146, LargestCity: "Leh", FormationDate: new Date("2019-10-31") },
    { ID: "INLA", Area: 32, LargestCity: "Kavaratti", FormationDate: new Date("1956-11-01") },
    { ID: "INMP", Area: 308245, LargestCity: "Indore", FormationDate: new Date("1956-11-01") },
    { ID: "INMH", Area: 307713, LargestCity: "Mumbai", FormationDate: new Date("1960-05-01") },
    { ID: "INMN", Area: 22327, LargestCity: "Imphal", FormationDate: new Date("1972-01-21") },
    { ID: "INML", Area: 22429, LargestCity: "Shillong", FormationDate: new Date("1972-01-21") },
    { ID: "INMZ", Area: 21081, LargestCity: "Aizawl", FormationDate: new Date("1987-02-20") },
    { ID: "INNL", Area: 16579, LargestCity: "Dimapur", FormationDate: new Date("1963-12-01") },
    { ID: "INOD", Area: 155707, LargestCity: "Bhubaneswar", FormationDate: new Date("1936-04-01") },
    { ID: "INPY", Area: 492, LargestCity: "Puducherry", FormationDate: new Date("1963-07-01") },
    { ID: "INPB", Area: 50362, LargestCity: "Ludhiana", FormationDate: new Date("1966-11-01") },
    { ID: "INRJ", Area: 342239, LargestCity: "Jaipur", FormationDate: new Date("1956-11-01") },
    { ID: "INSK", Area: 7096, LargestCity: "Gangtok", FormationDate: new Date("1975-05-16") },
    { ID: "INTN", Area: 130058, LargestCity: "Chennai", FormationDate: new Date("1956-11-01") },
    { ID: "INTG", Area: 112077, LargestCity: "Hyderabad", FormationDate: new Date("2014-06-02") },
    { ID: "INTR", Area: 10486, LargestCity: "Agartala", FormationDate: new Date("1972-01-21") },
    { ID: "INUP", Area: 243286, LargestCity: "Kanpur", FormationDate: new Date("1950-01-26") },
    { ID: "INUT", Area: 53483, LargestCity: "Dehradun", FormationDate: new Date("2000-11-09") },
    { ID: "INWB", Area: 88752, LargestCity: "Kolkata", FormationDate: new Date("1947-08-15") }
];

const State = require("./states.js");
async function insertValuesInDatabase(){
    try{
        const check = await State.find();
        if(check.length===0){
            await State.insertMany(statesData);
            console.log("All the states are added succesfully");
        }
    }
    catch(e){
        console.log(e.message);
    }
}
insertValuesInDatabase();

const Information = require("./information.js");
async function insertStateInformation(){
    try{
        const check = await Information.find();
        if(check.length===0){
            await Information.insertMany(stateInformation);
            console.log("State information updated succesfully");
        }
    }
    catch(e){
        console.log(e.message);
    }
}
insertStateInformation();

//EXPRESS ROUTE TO GET STATE INFORMATION
const express = require("express");
const app = express()
const cors = require("cors");
const information = require("./information.js");
app.use(cors(""));

app.get("/info-box",async(req,res) => {
    const {stateID} = req.query;
    try{
        const state = await State.findOne({ ID:stateID });
        if(state.length===0){
            return res.status(404).json({error : "State Not Found"});
        }
        res.json({State : state.Name , Capital : state.Capital});
    }
    catch(error){
        return res.status(500).json({error : "Internal server error"});
    }
})

app.get("/additional-info",async(req,res) => {
    const {stateID} = req.query;
    try{
        const state = await State.findOne({ ID:stateID });
        const stateInfo = await Information.findOne({ID:stateID});
        if(stateInfo.length===0){
            return res.status(404).json({error : "State not Found"});
        }
        let formatedDate = stateInfo.FormationDate;
        formatedDate = new Date(formatedDate);
        formatedDate = formatedDate.toLocaleDateString(formatedDate)
        res.json({Name : state.Name,
                  Capital : state.Capital,
                  Area : stateInfo.Area,
                  LargestCity : stateInfo.LargestCity,
                  FormationDate : formatedDate});
    }
    catch(error){
        return res.status(500).json({error : "Internal server error"});
    }
})

app.listen(5700);