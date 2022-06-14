
const express = require("express");
const bodyParser = require("body-parser");
const { message } = require("statuses");
const { maxHeaderSize } = require("http");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
    console.log("Aboba");
  });

  