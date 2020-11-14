const ws = require("ws");
const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.use(express.static(path.resolve(__dirname, "..", "public")));
//asd
