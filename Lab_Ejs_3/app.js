const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const userDataList = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index",{
    pageTitle: "Home",
    welcomeMessage: "ขอต้อนรับเข้าสู่โลกของ EJS"
  });
});

app.get("/form", (req, res) => {
  res.render("form",{pageTitle: "Form"});
});

app.get("/data", (req, res) => {
  res.render("data",{
    pageTitle: "Data",
    dataList: userDataList
  });
});

app.post("/submit", (req, res) => {
  // console.log("Form data received:", req.body);
  // res.send("Data submitted successfully!");
  const newEntry = {
    name: req.body.name,
    email: req.body.email,
    date: new Date().toLocaleString()
  };
  userDataList.push(newEntry);
  
  console.log(userDataList);
  res.redirect("/data");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
