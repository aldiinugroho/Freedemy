const express = require("express");
var path = require("path");
const router = express.Router();

router.post("/data", (req,res) => {
    res.end(JSON.stringify(req.body));
});

module.exports = router;