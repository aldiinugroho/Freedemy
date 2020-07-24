const express = require("express");
const path = require("path");
var router = express.Router();

router.get("/homepage", async (req,res) => {
    const user = req.session.user;

    await res.sendFile(path.join(__dirname+'/view/homepage.html'));
    // await res.send(user)
});


module.exports = router;
