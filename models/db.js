const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FreedemyDB", {useNewUrlParser: true}, (err) => {
    if(!err) {console.log("DB connection succeeded.")}
    else {console.log("Error in DB connection: "+err)}
});

require("./user.signup");