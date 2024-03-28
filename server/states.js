const mongoose = require("mongoose");

const statesSchema = mongoose.Schema({
    ID : String,
    Name : String,
    Capital : String,
});

module.exports = mongoose.model("States",statesSchema);