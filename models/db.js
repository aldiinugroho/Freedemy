const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Dkings:Aldi2201@testingweb.epxe1.mongodb.net/Freedemy?retryWrites=true&w=majority", {useNewUrlParser: true}, (err) => {
    if(!err) {console.log("DB connection succeeded.")}
    else {console.log("Error in DB connection: "+err)}
});

require("./user.signup");