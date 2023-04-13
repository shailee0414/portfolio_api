const express = require("express");
const app = express();
const path = require("path");
const port= process.env.PORT || 8000;
const mongoose = require("mongoose");

const Profile=require("./models/profile")

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

app.get('/profile',async (req,res) => {
    const profile=new Profile({
        name:"Shailee Yadav",
        email:"shaileeyadav130@gmail.com",
        phoneNo:7348265799
    })
    await profile.save();
    res.send(profile);
});

app.listen(port, () => {
  console.log("app on 3000 port");
});
