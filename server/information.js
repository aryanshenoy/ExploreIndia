const { default: mongoose } = require("mongoose");

const informationSchema = mongoose.Schema({
    ID : String,
    Area : Number,
    LargestCity : String,  
    FormationDate : Date,
});

module.exports = mongoose.model("Information",informationSchema);