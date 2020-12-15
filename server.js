const express = require("express");
const app = express();
// const cors = require('cors')
 
require("dotenv").config();

const connectDB = require("./models/connectDB");
const router = require("./routes/router");

connectDB();

// app.use(cors())
app.use(express.json());
app.use("/api", router);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});




















// const express = require("express");
// require("dotenv").config()

// const app = express();

// const connectDB = require("./models/connectDB")


// const router = require("./routes/route.js");
// connectDB();



// app.use(express.json())

// app.use("/api", router);

// app.listen(5000, () => {
//     console.log("dinliyorum")
// })