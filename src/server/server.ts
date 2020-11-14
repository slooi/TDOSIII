const ws = require("ws");
const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// Middleware
app.use(express.static(path.resolve(__dirname, "..", "public")));
//asd

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
