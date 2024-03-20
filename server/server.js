const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors("http://localhost:5173/"));

const stateCapitals = {
    "INAN": { state: 'Andaman and Nicobar Islands', capital: 'Port Blair' },
    "INAP": { state: 'Andhra Pradesh', capital: 'Amaravati' },
    "INAR": { state: 'Arunachal Pradesh', capital: 'Itanagar' },
    "INAS": { state: 'Assam', capital: 'Dispur' },
    "INBH": { state: 'Bihar', capital: 'Patna' },
    "INCH": { state: 'Chandigarh', capital: 'Chandigarh' },
    "INCT": { state: 'Chhattisgarh', capital: 'Raipur' },
    "INDN": { state: 'Dadra and Nagar Haveli and Daman and Diu', capital: 'Daman' },
    "INDL": { state: 'Delhi', capital: 'New Delhi' },
    "INGA": { state: 'Goa', capital: 'Panaji' },
    "INGJ": { state: 'Gujarat', capital: 'Gandhinagar' },
    "INHR": { state: 'Haryana', capital: 'Chandigarh' },
    "INHP": { state: 'Himachal Pradesh', capital: 'Shimla' },
    "INJK": { state: 'Jammu and Kashmir', capital: 'Srinagar' },
    "INJH": { state: 'Jharkhand', capital: 'Ranchi' },
    "INKA": { state: 'Karnataka', capital: 'Bengaluru' },
    "INKL": { state: 'Kerala', capital: 'Thiruvananthapuram' },
    "INLD": { state: 'Ladakh', capital: 'Leh' },
    "INLA": { state: 'Lakshadweep', capital: 'Kavaratti' },
    "INMP": { state: 'Madhya Pradesh', capital: 'Bhopal' },
    "INMH": { state: 'Maharashtra', capital: 'Mumbai' },
    "INMN": { state: 'Manipur', capital: 'Imphal' },
    "INML": { state: 'Meghalaya', capital: 'Shillong' },
    "INMZ": { state: 'Mizoram', capital: 'Aizawl' },
    "INNL": { state: 'Nagaland', capital: 'Kohima' },
    "INOD": { state: 'Odisha', capital: 'Bhubaneswar' },
    "INPY": { state: 'Puducherry', capital: 'Puducherry' },
    "INPB": { state: 'Punjab', capital: 'Chandigarh' },
    "INRJ": { state: 'Rajasthan', capital: 'Jaipur' },
    "INSK": { state: 'Sikkim', capital: 'Gangtok' },
    "INTN": { state: 'Tamil Nadu', capital: 'Chennai' },
    "INTG": { state: 'Telangana', capital: 'Hyderabad' },
    "INTR": { state: 'Tripura', capital: 'Agartala' },
    "INUP": { state: 'Uttar Pradesh', capital: 'Lucknow' },
    "INUT": { state: 'Uttarakhand', capital: 'Dehradun' },
    "INWB": { state: 'West Bengal', capital: 'Kolkata' }
};

app.get("/",(req,res) => {

    const { stateID } = req.query;
    const stateInfo = stateCapitals[stateID];

    if(!stateInfo){
        res.status(404).json({error : "State not found"});
    }else{
        res.json(stateInfo);
    }
})

app.listen(5700)