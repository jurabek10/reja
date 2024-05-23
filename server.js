console.log("Web serverni yozamiz");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session bog'liq kodlar

// 3 Viewsga bog'liq kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing ga bog'liq kodlar
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "succes" });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

// app.get("/hello", function (req, res) {
//   res.end("<h1 style='background: red'>Hello World by John</h1>");
// });

// app.get("/gift", function (req, res) {
//   res.end("<h1>Siz sovg'alar sahifasidasiz</h1>");
// });

// app.get("/contact", function (req, res) {
//   res.end("<h1>You are in contact page</h1>");
// });

//   Calling server
const server = http.createServer(app);
let PORT = 3000;
server.listen(3000, function () {
  console.log(`The server is running successfully on port: ${PORT}}`);
});
