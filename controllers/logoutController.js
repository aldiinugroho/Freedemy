const express = require("express");
const path = require("path");

var router = express.Router();

router.get('/logout', (req,res) => {
  try {
    req.session.destroy();
    res.redirect('/');
  } catch (error) {
    
  }
});

module.exports = router