const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyparser = require("body-parser");

// app.use("/", router);
app.use(bodyparser());

// untuk merender css
app.use(express.static(path.join(__dirname, '/view')));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/view/index.html'));
})

app.post('/data',(req,res) => {
    res.end(JSON.stringify(req.body));
});

app.listen(port, console.log("listen to port : "+port));