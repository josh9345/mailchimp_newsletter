const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on ${PORT}`));
