const express = require("express");
const path = require("path");
var router = express.Router();
const mongoose = require("mongoose");
const data = mongoose.model("userSignup");

router.get("/test", async (req,res) => {
    // if(err) throw err;
    const dat = await data.find({})
    // console.log(dat);
    res.json(dat) 
});


module.exports = router;