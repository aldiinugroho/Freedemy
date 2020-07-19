const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username:{type: String},
    email:{type: String},
    password:{type: String},
    userjoin:{type: Date}
});

mongoose.model("user", userSchema);