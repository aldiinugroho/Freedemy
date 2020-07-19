const express = require("express");
const path = require("path");
var router = express.Router();

router.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname+'/view/signup.html'));
});

module.exports = router;