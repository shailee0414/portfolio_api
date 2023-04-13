const express = require("express");
const cors=require('cors');
const app = express();
app.use(cors());
const path = require("path");
require("dotenv").config();
const port = process.env.PORT;

const mongoose = require("mongoose");
const profile=require('./routes/profile');
const {readdirSync}=require('fs');
readdirSync("./routes").map(file=>app.use('/',require(`./routes/${file}`)))



mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" MONGODB CONNECTION OPEN AT ");
  })
  .catch((err) => {
    console.log(`OH NO ERROR ! ${err}`);
  });

  app.get('/',(req,res)=>{
    res.send("main page");
  })

app.listen(port, () => {
  console.log("app on  port",port);
});

