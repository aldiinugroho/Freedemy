const express = require("express");
const path = require("path");
var router = express.Router();

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'./view/index.html'));
});

module.exports = router;