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
    var Upass = req.body.LoginPassword;
    var Uusername = req.body.LoginUsername;

    data.findOne({username: Uusername}, (err, obj) => {
        try {
            if(!obj){
                res.redirect("/");
                console.log("no username match !!");
            }else{
                bcrypt.compare(Upass, obj.password, (err,result) => {
                    if(!err)
                    {
                        console.log(result);
                    }
                });
                res.end(JSON.stringify(obj.password));
                console.log("welcome back :) .");
                console.log(obj);
            }
        } catch (err) {
            throw err;
        }
    });

});

module.exports = router;