const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome to the alanced home" });
});
app.get("/about", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome to the alanced About page" });
});
app.get("/contact", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome to the alanced Contact" });
});

app.use("*", (req, res) => {
  res.status(404).json({ sucess: false, message: "Page not found!!!" });
});

app.listen(3000, () => {
  console.log(`server is running at port :3000`);
});
