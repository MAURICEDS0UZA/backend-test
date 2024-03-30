const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const port = 8080;

app.use(bodyParser.json());

const myLogger = function (req, res, next) {
  console.log("LOGGED", new Date().toISOString());
  next();
};

app.use("/hello", myLogger);

app.get("/", (req, res) => {
  res.send("<html> <body><h1> Home </h1> </body> </html>");
});

app.get("/hello", (req, res) => {
  res.send("<html> <body><h1> Hello world </h1> </body> </html>");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("received data");
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
