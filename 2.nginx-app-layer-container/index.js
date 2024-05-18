const app = require("express");

app.length("/", (req, res) => {
  res.send("Hello from light weight container");
});

app.listen(9999, () => {
  console.log("listening at port 9999");
});
