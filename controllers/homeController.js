const express = require("express");
const path = require("path");
var router = express.Router();

router.get("/userdat", async (req,res) => {
    try {
        const user = await req.session.user;
        res.json(user)
    } catch (error) {
        
    }
});

router.get("/test", async (req,res) => {
    try {
        const dats = await req.session.datas;
        res.json(dats) 
    } catch (error) {
        
    }
});

router.get("/homepage", (req,res) => {
    res.sendFile(path.join(__dirname+'/view/homepage.html'));
});


module.exports = router;
