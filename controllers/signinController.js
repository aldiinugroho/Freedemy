const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const data = mongoose.model("userSignup");

var router = express.Router();

// hash
const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRounds = 10;

router.post("/signindata", async (req,res) => {
    try {
        var Upass = req.body.LoginPassword;
        var Uusername = req.body.LoginUsername;

        const done = await checkUser(Uusername,Upass);
        if(done == true){
            req.session.user = await getDataFromDB(Uusername);
            req.session.datas = await getdats();
            res.redirect("/homepage");
        }else{
            res.redirect("/");
        } 
    } catch (error) {
        console.log("READ !! : "+error)
    }

});

// test data
async function getdats() {
    const dat = await  data.find({}).exec()
    return dat
}

async function checkUser(Uname,Upas) {
    try {
        const user = await data.findOne({username: Uname}).exec();
        const match = await bcrypt.compare(Upas, user.password);
 
        if(match) {
            return match;
        }else{
            return match;
        }
    } catch (error) {
        console.log("READ !! : "+error);
    }
}

async function getDataFromDB(uname) {
    const dat = await data.findOne({username: uname}).exec()
    return dat;
}

module.exports = router;