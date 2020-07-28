require("./models/db");
const express = require("express");
const port = process.env.port || 3000;
const bodyparser = require("body-parser");
const path = require("path");
const session = require("express-session");

// panggil controller
const indexController = require("./controllers/indexController");
const signupController = require("./controllers/signupController");
const errHandler = require("./controllers/errorController");
const singinController = require("./controllers/signinController");
const homeController = require("./controllers/homeController");
const logoutController = require("./controllers/logoutController")

var app = express();
app.listen(port, console.log("listen to port : "+port));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(session({
    secret: "secretSes",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: false
        // set false untuk login setiap client restart
        // set value untuk expire login 24 * 60 * 60 * 1000 = 24 jam
    }
}))

// // untuk merender css
app.use(express.static(path.join(__dirname, "./controllers/view")));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Headers","*")
    res.setHeader("Access-Control-Allow-Origin","*")
    next()
})

// idk
app.get("/", indexController);
app.get("/signup", signupController);

app.get("/homepage",homeController);
app.get("/userdat",homeController);
app.get("/test", homeController);

app.get("/logout", logoutController)

// error handler 
app.post("/error", errHandler);
app.get("/error", errHandler);

// data flow
app.post("/signupdata", signupController);
app.post("/signindata", singinController);

