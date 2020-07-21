const express = require("express");
var path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const { get } = require("./homeController");
const data = mongoose.model("user");

// pass hash
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/data", (req,res) => {
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
    userData.date = Date.now();
    userData.save((err,doc) => {
        if(!err){
            res.redirect("/");
        }else{
            console.log("error : "+err);
        }
    });
};


module.exports = router;