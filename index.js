require("./models/db");
const express = require("express");
const port = 3000;
const bodyparser = require("body-parser");
const path = require("path");
const session = require("express-session");

// panggil controller
const indexController = require("./controllers/indexController");
const signupController = require("./controllers/signupController");
const errHandler = require("./controllers/errorController");
const singinController = require("./controllers/signinController");
const homeController = require("./controllers/homeController");
const tests = require("./controllers/test");

var app = express();
app.listen(port, console.log("listen to port : "+port));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(session({
    secret: "secretSes",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}))

// // untuk merender css
app.use(express.static(path.join(__dirname, "./controllers/view")));

// idk
app.get("/", indexController);
app.get("/signup", signupController);

app.get("/homepage",homeController);

// error handler 
app.post("/error", errHandler);
app.get("/error", errHandler);

// data flow
app.post("/signupdata", signupController);
app.post("/signindata", singinController);

app.post("/test", tests);