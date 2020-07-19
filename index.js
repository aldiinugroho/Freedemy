require("./models/db");
const express = require("express");
const port = 3000;
const bodyparser = require("body-parser");
const path = require("path");
// panggil controller
const homeController = require("./controllers/homeController");
const signupController = require("./controllers/signupController");
const errHandler = require("./controllers/errorController");
const testController = require("./controllers/testController");

var app = express();
app.listen(port, console.log("listen to port : "+port));

// app.use("/", router);
app.use(bodyparser());
// // untuk merender css
app.use(express.static(path.join(__dirname, "./controllers/view")));
// app.use("/", homeController);
app.get("/", homeController);
app.get("/signup", signupController);

// error handler 
app.post("/error", errHandler);
app.get("/error", errHandler);

// test
app.post("/data", testController);