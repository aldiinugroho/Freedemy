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

router.get("/homepage", (req,res) => {
    res.sendFile(path.join(__dirname+'/view/homepage.html'));
});


module.exports = router;
