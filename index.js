require("./models/db");
const express = require("express");
const port = 3000;
const bodyparser = require("body-parser");
const path = require("path");

// panggil controller
const homeController = require("./controllers/homeController");
const signupController = require("./controllers/signupController");
const errHandler = require("./controllers/errorController");
const singinController = require("./controllers/signinController");

var app = express();
app.listen(port, console.log("listen to port : "+port));

// app.use("/", router);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// // untuk merender css
app.use(express.static(path.join(__dirname, "./controllers/view")));

// idk
app.get("/", homeController);
app.get("/signup", signupController);

// error handler 
app.post("/error", errHandler);
app.get("/error", errHandler);

// data flow
app.post("/signupdata", signupController);
app.post("/signindata", singinController);
