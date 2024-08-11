const express = require("express");
const logger = require("morgan");
const process = require("process");
const app = express();
const port = process.env.PORT;
const { dbConnection, mongose } = require("./utils/db").default;

app.use(express.json());

const authService = require("./utils/auth")(mongose);

app.post("/register", async (request, res) => {
  const response = await authService.register(request.body);
  res
    .status(response.status)
    .json({ message: response.message, data: response.data });
});

app.listen(8080, () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

dbConnection();
