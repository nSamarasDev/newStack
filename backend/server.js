const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
