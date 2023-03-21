const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// connect to db
connectDB();

// init middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
