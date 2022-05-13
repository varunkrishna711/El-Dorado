const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("datase connected .."))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/auth", authRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("running on port 4000.."));
