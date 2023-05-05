const express = require("express");
var path=require('path');
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(___dirname + '/index.html'));
});
