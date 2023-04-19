const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
//env config
dotenv.config();

const app = express();

//connect database
mongoose.connect("mongodb://localhost:27017/blogbackend");

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", routes);
app.use("/uploads", express.static("./uploads"));
//PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server Running on ${process.env.DEV_MODE} port no ${PORT}`);
});
