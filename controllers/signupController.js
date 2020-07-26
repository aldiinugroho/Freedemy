const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const data = mongoose.model("userSignup");

// hash
const bcrypt = require("bcrypt");
const saltRounds = 10;

var router = express.Router();

router.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname+'/view/signup.html'));
});

router.post("/signupdata", (req,res) => {
    insertUserData(req,res);
});

function insertUserData(req,res) {
    var upass = req.body.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(upass, salt);

    var userData = new data();
    userData.username = req.body.username;
    userData.email = req.body.email;
    userData.password = hash;
    userData.date = new Date();

    userData.save((err,doc) => {
        if(!err){
            res.redirect("/");
        }else{
            console.log("error : "+err);
        }
    });
};

module.exports = router;