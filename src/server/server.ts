const ws = require("ws");
const express = require("express");
const app = express();
const path = require("path");

// Make a routes
app.use(express.static(path.resolve(__dirname, "..", "..", "public", "dist")));
