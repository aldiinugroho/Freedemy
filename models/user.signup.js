const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{type: String},
    email:{type: String},
    password:{type: String},
    date:{type: Date}
}, {versionKey: false});

mongoose.model("user", userSchema);