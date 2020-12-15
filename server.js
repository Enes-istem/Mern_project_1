const express = require("express");
require("dotenv").config()

const app = express();

const connectDB = require("./models/connectDB")


const router = require("./routes/route.js");
connectDB();



app.use(express.json())

app.use("/api", router);

app.listen(5000, () => {
    console.log("dinliyorum")
})