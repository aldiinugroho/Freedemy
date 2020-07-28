const express = require("express");
const path = require("path");
var router = express.Router();

router.post("/error", (req,res) => {
    res.sendFile(path.join(__dirname, "./view/errHandler.html"));
});

router.get("/error", (req,res) => {
    res.sendFile(path.join(__dirname, "./view/errHandler.html"));
});

module.exports = router;