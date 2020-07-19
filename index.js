require("./models/db");
const express = require("express");
const port = 3000;
const bodyparser = require("body-parser");
// panggil controller
const homeController = require("./controllers/homeController");

var app = express();
app.listen(port, console.log("listen to port : "+port));

// app.use("/", router);
app.use(bodyparser());
app.use("/home", homeController);

// // untuk merender css
// app.use(express.static(path.join(__dirname, '/view')));

// app.get("/home", (req,res) => {
//     res.sendFile(path.join(__dirname+'/view/index.html'));
// })

// app.get("/signup", (req,res) => {
//     res.sendFile(path.join(__dirname+'/view/signup.html'));
// })

// app.post("/error", (req,res) => {
//     res.sendFile(path.join(__dirname+'/view/error404.html'));
// })

// app.get("/errors", (req,res) => {
//     res.sendFile(path.join(__dirname+'/view/error404.html'));
// })

// app.post('/data',(req,res) => {
//     res.end(JSON.stringify(req.body));
// });