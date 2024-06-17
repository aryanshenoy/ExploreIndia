const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aryanshenoys:bUs_!ZxFWSf5Q$c@explore-india.vlfsoxs.mongodb.net/")
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
    { ID: "INAN", Area: 8249, LargestCity: "Port Blair", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INAN.gif"},
    { ID: "INAP", Area: 162968, LargestCity: "Visakhapatnam", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INAP.jpg" },
    { ID: "INAR", Area: 83743, LargestCity: "Itanagar", FormationDate: new Date("1987-02-20"), Image: "/src/assets/INAR.jpg"},
    { ID: "INAS", Area: 78438, LargestCity: "Guwahati", FormationDate: new Date("1947-08-15"), Image: "/src/assets/INAS.jpg"},
    { ID: "INBH", Area: 94163, LargestCity: "Patna", FormationDate: new Date("1912-03-22"), Image: "/src/assets/INBH.jpg"},
    { ID: "INCH", Area: 114, LargestCity: "Chandigarh", FormationDate: new Date("1966-11-01"), Image: "/src/assets/INCH.jpg"},
    { ID: "INCT", Area: 135192, LargestCity: "Raipur", FormationDate: new Date("2000-11-01"), Image: "/src/assets/INCT.jpg"},
    { ID: "INDH", Area: 603, LargestCity: "Silvassa", FormationDate: new Date("2020-01-26"), Image: "/src/assets/INDH.jpg"},
    { ID: "INDL", Area: 1484, LargestCity: "Delhi", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INDL.jpg"},
    { ID: "INGA", Area: 3702, LargestCity: "Vasco da Gama", FormationDate: new Date("1987-05-30"), Image: "/src/assets/INGA.jpg"},
    { ID: "INGJ", Area: 196024, LargestCity: "Ahmedabad", FormationDate: new Date("1960-05-01"), Image: "/src/assets/INGJ.jpg"},
    { ID: "INHR", Area: 44212, LargestCity: "Faridabad", FormationDate: new Date("1966-11-01"), Image: "/src/assets/INHR.jpg"},
    { ID: "INHP", Area: 55673, LargestCity: "Shimla", FormationDate: new Date("1971-01-25"), Image: "/src/assets/INHP.jpg"},
    { ID: "INJK", Area: 222236, LargestCity: "Srinagar", FormationDate: new Date("2019-10-31"), Image: "/src/assets/INJK.jpg" },
    { ID: "INJH", Area: 79716, LargestCity: "Jamshedpur", FormationDate: new Date("2000-11-15"), Image: "/src/assets/INBH.jpg"},
    { ID: "INKA", Area: 191791, LargestCity: "Bengaluru", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INKA.jpg"},
    { ID: "INKL", Area: 38852, LargestCity: "Kochi", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INKL.jpg" },
    { ID: "INLD", Area: 59146, LargestCity: "Leh", FormationDate: new Date("2019-10-31"), Image: "/src/assets/INLD.jpg",},
    { ID: "INLA", Area: 32, LargestCity: "Kavaratti", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INLA.jpg" },
    { ID: "INMP", Area: 308245, LargestCity: "Indore", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INMP.jpg" },
    { ID: "INMH", Area: 307713, LargestCity: "Mumbai", FormationDate: new Date("1960-05-01"), Image: "/src/assets/INMH.jpg" },
    { ID: "INMN", Area: 22327, LargestCity: "Imphal", FormationDate: new Date("1972-01-21"), Image: "/src/assets/INMA.jpg" },
    { ID: "INML", Area: 22429, LargestCity: "Shillong", FormationDate: new Date("1972-01-21"), Image: "/src/assets/INML.jpg" },
    { ID: "INMZ", Area: 21081, LargestCity: "Aizawl", FormationDate: new Date("1987-02-20"), Image: "/src/assets/INMZ.jpg" },
    { ID: "INNL", Area: 16579, LargestCity: "Dimapur", FormationDate: new Date("1963-12-01"), Image: "/src/assets/INNL.jpg" },
    { ID: "INOD", Area: 155707, LargestCity: "Bhubaneswar", FormationDate: new Date("1936-04-01"), Image: "/src/assets/INOD.jpg" },
    { ID: "INPY", Area: 492, LargestCity: "Puducherry", FormationDate: new Date("1963-07-01"), Image: "/src/assets/INPY.jpg" },
    { ID: "INPB", Area: 50362, LargestCity: "Ludhiana", FormationDate: new Date("1966-11-01"), Image: "/src/assets/INPB.jpg" },
    { ID: "INRJ", Area: 342239, LargestCity: "Jaipur", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INRJ.jpg" },
    { ID: "INSK", Area: 7096, LargestCity: "Gangtok", FormationDate: new Date("1975-05-16"), Image: "/src/assets/INSK.jpg" },
    { ID: "INTN", Area: 130058, LargestCity: "Chennai", FormationDate: new Date("1956-11-01"), Image: "/src/assets/INTN.jpg" },
    { ID: "INTG", Area: 112077, LargestCity: "Hyderabad", FormationDate: new Date("2014-06-02"), Image: "/src/assets/INTG.jpg" },
    { ID: "INTR", Area: 10486, LargestCity: "Agartala", FormationDate: new Date("1972-01-21"), Image: "/src/assets/INTR.jpg" },
    { ID: "INUP", Area: 243286, LargestCity: "Kanpur", FormationDate: new Date("1950-01-26"), Image: "/src/assets/INUP.jpg" },
    { ID: "INUT", Area: 53483, LargestCity: "Dehradun", FormationDate: new Date("2000-11-09"), Image: "/src/assets/INUT.jpg" },
    { ID: "INWB", Area: 88752, LargestCity: "Kolkata", FormationDate: new Date("1947-08-15"), Image: "/src/assets/INWB.jpg" }
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
                  FormationDate : formatedDate,
                  Image: stateInfo.Image});
    }
    catch(error){
        return res.status(500).json({error : "Internal server error"});
    }
})

app.listen(5700);