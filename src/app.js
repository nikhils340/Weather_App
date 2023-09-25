const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();

const port = process.env.PORT || 8000;
// express middleware for serving the static pages
const indexhtmlpath = path.join(__dirname, "../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");

// console.log(indexhtmlpath);
app.set("view engine","hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(indexhtmlpath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/whether", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error",{
    errormsg:"OOP's Page Not Found"
  });
});

app.listen(port, () => {
  console.log(`The website is running on the port http://localhost:${port}`);
});
