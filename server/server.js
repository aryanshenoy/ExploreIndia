const express = require("express")
const app = express()

const stateCapitals = [
    { state: 'Andaman and Nicobar Islands', capital: 'Port Blair' },
    { state: 'Andhra Pradesh', capital: 'Amaravati' },
    { state: 'Arunachal Pradesh', capital: 'Itanagar' },
    { state: 'Assam', capital: 'Dispur' },
    { state: 'Bihar', capital: 'Patna' },
    { state: 'Chandigarh', capital: 'Chandigarh' },
    { state: 'Chhattisgarh', capital: 'Raipur' },
    { state: 'Dadra and Nagar Haveli and Daman and Diu', capital: 'Daman' },
    { state: 'Delhi', capital: 'New Delhi' },
    { state: 'Goa', capital: 'Panaji' },
    { state: 'Gujarat', capital: 'Gandhinagar' },
    { state: 'Haryana', capital: 'Chandigarh' },
    { state: 'Himachal Pradesh', capital: 'Shimla' },
    { state: 'Jammu and Kashmir', capital: 'Srinagar' },
    { state: 'Jharkhand', capital: 'Ranchi' },
    { state: 'Karnataka', capital: 'Bengaluru' },
    { state: 'Kerala', capital: 'Thiruvananthapuram' },
    { state: 'Ladakh', capital: 'Leh' },
    { state: 'Lakshadweep', capital: 'Kavaratti' },
    { state: 'Madhya Pradesh', capital: 'Bhopal' },
    { state: 'Maharashtra', capital: 'Mumbai' },
    { state: 'Manipur', capital: 'Imphal' },
    { state: 'Meghalaya', capital: 'Shillong' },
    { state: 'Mizoram', capital: 'Aizawl' },
    { state: 'Nagaland', capital: 'Kohima' },
    { state: 'Odisha', capital: 'Bhubaneswar' },
    { state: 'Puducherry', capital: 'Puducherry' },
    { state: 'Punjab', capital: 'Chandigarh' },
    { state: 'Rajasthan', capital: 'Jaipur' },
    { state: 'Sikkim', capital: 'Gangtok' },
    { state: 'Tamil Nadu', capital: 'Chennai' },
    { state: 'Telangana', capital: 'Hyderabad' },
    { state: 'Tripura', capital: 'Agartala' },
    { state: 'Uttar Pradesh', capital: 'Lucknow' },
    { state: 'Uttarakhand', capital: 'Dehradun' },
    { state: 'West Bengal', capital: 'Kolkata' }
  ]  

app.get("/",(req,res) => {
    const {name} =  req.query;
    const state = stateCapitals.find(state => state.state === "Karnataka");

    if(!state){
        res.status(404).json({error : "State not found"});
    }else{
        res.json(state);
    }
})

app.listen(5700)