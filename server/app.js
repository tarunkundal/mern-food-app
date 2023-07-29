const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5050;

// db connection
require("./src/db/connection");

// middlewares
app.use(express.json());
app.use(cookieParser);
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: true,
    // origin: "http://localhost:3000",
  })
);

// routes
const mealsRoute = require("./src/routes/mealsRoutes");

app.use("/api/meals", mealsRoute);

// server
app.listen(PORT, (req, res) =>
  console.log(`Server is running on port number ${PORT}`)
);
