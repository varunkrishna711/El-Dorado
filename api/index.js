const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const razorRoute = require("./Routes/razorpay");
const eventRoute = require("./Routes/event");
const courseRoute = require("./Routes/course");
const userRoute = require("./Routes/users");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("database connected .."))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.get('/',(req,res) => res.send('hello world'))

app.use("/api/auth", authRoute);
app.use("/api/razorpay", razorRoute);
app.use("/api", eventRoute);
app.use("/api", courseRoute);
app.use("/api", userRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("running on port 4000.."));
