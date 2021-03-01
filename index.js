const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const dotenv = require("dotenv");
const path = require("path");
var cors = require("cors");
const errorHandler = require("./middleware/error");

// Load env vars
dotenv.config({ path: "./config/config.env" });


// Connect to database
connectDB();

//route files
const auth = require("./routes/auth");
const package = require("./routes/package");
const cases = require("./routes/case");
const cdfForm = require("./routes/cdfForm");
const vendor = require("./routes/vendor")




const app = express();

//statis file
app.use(express.static("public"));
app.use(cors());

// Body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount route
app.use("/api/v1/auth", auth);
app.use("/api/v1/package", package);
app.use("/api/v1/case", cases);
app.use("/api/v1/form", cdfForm);
app.use("/api/v1/vendor",vendor)




app.use(errorHandler);


const PORT = process.env.PORT || 5000;

 app.listen(
  PORT,
  console.log(
    `Server running in  mode on port ${PORT}`
  )
);