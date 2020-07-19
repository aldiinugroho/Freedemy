const express = require("express");
const path = require('path');
var router = express.Router();

// // untuk merender css
router.use(express.static(path.join(__dirname, '/view')));

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/view/index.html'));
    // req.json("sample text");
})

module.exports = router;