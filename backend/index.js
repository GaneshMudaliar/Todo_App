const express = require("express");
const app =express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("./config/database");
const routes = require("./routes/todoRoutes");

// connect to db
dbConnect();

app.use(express.json());
app.use(cors());
// routes

app.use("/api" , routes);



app.listen(PORT , () => {
  console.log("Server running in port " , PORT);
})
