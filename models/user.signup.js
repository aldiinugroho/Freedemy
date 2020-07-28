const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");

const userSchema = new mongoose.Schema({
    username:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true}
}, {timestamps: true ,versionKey: false});

mongoose.model("userSignup", userSchema);