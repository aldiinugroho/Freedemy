const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const data = mongoose.model("user");

var router = express.Router();

// hash
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/signindata", async (req,res) => {
    // if(err) throw err;
    try {
        var Upass = req.body.LoginPassword;
        var Uusername = req.body.LoginUsername;

        const done = await checkUser(Uusername,Upass);
        if(done == true){
            // res.end(JSON.stringify(req.body));
            // console.log(done);

            req.session.user = await getDataFromDB(Uusername);
            console.log("data true and checked");
        }else{
            res.redirect("/error");
            console.log(done);
        } 
    } catch (error) {
        console.log(error);
    }

});

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
        console.log("sorry error"+error);
    }
}

async function getDataFromDB(uname) {
    const dat = await data.findOne({username: uname}).exec()
    return dat
}

module.exports = router;