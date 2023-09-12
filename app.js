const express = require("express");
const path = require("path");
const app = express();
const port = 2023;

app.use(express.static("src"));

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
