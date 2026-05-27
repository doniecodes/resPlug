require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./data/pg");

const userRoutes = require("./routes/userRoutes");


//init app
const app = express();

//middleware
app.use(express.json());
app.use(cors({
  target: "http://localhost:8081",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
}))

//connect db
client.connect().then((result)=> {
  app.listen(8000, ()=> {
    console.log("listening on port 8000");
  })
}).catch((error)=> {
  console.log(error);
});

// user routes
app.use("/user", userRoutes);