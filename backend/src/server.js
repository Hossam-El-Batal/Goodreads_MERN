const express = require("express");

const logger = require("morgan");

const process = require("process");

const app = express();

const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const booksRoute = require("./routes/BooksRoute");
const reviewsRoute = require("./routes/ReviewsRoute");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

dbConnection();
